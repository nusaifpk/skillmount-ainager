import { useEffect, useRef, useState } from 'react';

interface HtmlCardMessageProps {
  html: string;
  initialHeight?: number;
  onAction?: (action: string, payload: string | null) => void;
}

/**
 * HtmlCardMessage: Renders an interactive HTML card inside a chat bubble
 *
 * Technical implementation:
 * 1. Uses <iframe srcDoc> to isolate HTML content with sandbox security
 * 2. Injects a postMessage script into the HTML to report scroll height changes
 * 3. Parent listens to postMessage events and updates iframe height dynamically
 * 4. Height is clamped between 180px and 560px for aesthetic consistency
 *
 * Sandbox rationale:
 * - allow-scripts: enables interactive elements (buttons, accordions)
 * - allow-same-origin: allows postMessage communication with parent
 * - allow-forms: enables form inputs if needed
 * - allow-popups: allows external links to open
 */
function HtmlCardMessage({ html, initialHeight = 300, onAction }: HtmlCardMessageProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(initialHeight);

  useEffect(() => {
    // postMessage resize loop: listen for height updates from iframe content
    const handleMessage = (event: MessageEvent) => {
      // Security check: only accept messages from our iframe
      if (event.source !== iframeRef.current?.contentWindow) return;

      const data = event.data;

      // Handle height updates from the injected script
      if (data && typeof data.scrollHeight === 'number') {
        // Clamp height between 180px (min) and 560px (max)
        const clampedHeight = Math.max(180, Math.min(560, data.scrollHeight + 20));
        setHeight(clampedHeight);
      }

      // Handle custom actions from interactive elements (e.g., button clicks)
      if (data && data.__card__ === 'action') {
        console.log('HTML Card action:', data.action, data.payload);
        if (onAction) {
          onAction(data.action, data.payload);
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [onAction]);

  // Inject postMessage script into the HTML content
  // This script monitors the document height and reports changes to the parent
  const scriptInjection = `
    <script>
      (function() {
        // Function to send height updates to parent
        function updateHeight() {
          const height = document.documentElement.scrollHeight;
          window.parent.postMessage({ scrollHeight: height }, '*');
        }

        // Initial height report
        updateHeight();

        // Watch for content changes using ResizeObserver
        if (window.ResizeObserver) {
          const observer = new ResizeObserver(() => {
            updateHeight();
          });
          observer.observe(document.body);
        }

        // Fallback: check height periodically
        setInterval(updateHeight, 500);

        // Handle custom actions from interactive elements
        document.addEventListener('click', function(e) {
          const target = e.target;
          if (target.dataset.action) {
            window.parent.postMessage({
              __card__: 'action',
              action: target.dataset.action,
              payload: target.dataset.payload || null
            }, '*');
          }
        });
      })();
    </script>
  `;

  // Combine original HTML with injected script
  const enhancedHtml = html.includes('</body>')
    ? html.replace('</body>', `${scriptInjection}</body>`)
    : html + scriptInjection;

  return (
    <div className="relative">
      {/* Iframe container with sandbox for security - Mobile responsive */}
      <iframe
        ref={iframeRef}
        srcDoc={enhancedHtml}
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
        style={{
          width: '100%',
          height: `${height}px`,
          border: 'none',
          display: 'block',
          transition: 'height 0.3s ease-out'
        }}
        title="Interactive HTML Card"
      />
    </div>
  );
}

export default HtmlCardMessage;
