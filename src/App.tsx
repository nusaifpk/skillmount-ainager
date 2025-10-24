import { useState, useRef, useEffect } from 'react';
import { Phone, Mic, Send, Loader2 } from 'lucide-react';
import HtmlCardMessage from './components/HtmlCardMessage';
import TextMessage from './components/TextMessage';
import {
  courseFinder,
  syllabusSnapshot,
  generateEnrollmentCard,
  generateCourseDetailsCard,
  generateScheduleCard,
  generateGenericResponseCard,
} from './data/htmlCards';
import { sendMessageToClaude, ChatMessage } from './services/claude';

// Message type model: three kinds of messages in chat
// - text: regular text bubble
// - image: image preview bubble
// - htmlCard: interactive mini-page bubble with iframe
type MsgKind = 'text' | 'image' | 'htmlCard';

type Msg = {
  id: string;
  role: 'user' | 'assistant';
  kind: MsgKind;
  text?: string;
  imageUrl?: string;
  html?: string;
  height?: number;
};

function App() {
  const [messages, setMessages] = useState<Msg[]>([
    {
      id: '1',
      role: 'assistant',
      kind: 'text',
      text: 'EFA: HI. I am the ainager of Skillmount. How can I help you?',
    },
    {
      id: '2',
      role: 'user',
      kind: 'text',
      text: 'I would like to know more about the courses provided by Skillmount',
    },
    {
      id: '3',
      role: 'assistant',
      kind: 'htmlCard',
      html: courseFinder,
      height: 400,
    },
  ]);

  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [conversationHistory, setConversationHistory] = useState<ChatMessage[]>([]);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    const userMsg: Msg = {
      id: Date.now().toString(),
      role: 'user',
      kind: 'text',
      text: userMessage,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await sendMessageToClaude(userMessage, conversationHistory);
      const assistantText = response.message;

      // Update conversation history
      setConversationHistory((prev) => [
        ...prev,
        { role: 'user', content: userMessage },
        { role: 'assistant', content: assistantText },
      ]);

      const assistantMsg: Msg = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        kind: 'text',
        text: assistantText,
      };

      setMessages((prev) => [...prev, assistantMsg]);

      // Intelligent card detection based on Claude's response
      const lowerResponse = assistantText.toLowerCase();
      let cardHtml = null;
      let cardHeight = 400;

      if (lowerResponse.includes('syllabus') || lowerResponse.includes('course content') || lowerResponse.includes('what will i learn') || lowerResponse.includes('curriculum')) {
        cardHtml = syllabusSnapshot;
        cardHeight = 420;
      } else if (lowerResponse.includes('schedule') || lowerResponse.includes('cohort') || lowerResponse.includes('session') || lowerResponse.includes('upcoming')) {
        cardHtml = generateScheduleCard();
        cardHeight = 420;
      } else if (lowerResponse.includes('enroll') || lowerResponse.includes('sign up') || lowerResponse.includes('register') || lowerResponse.includes('join')) {
        cardHtml = generateEnrollmentCard();
        cardHeight = 450;
      } else if (lowerResponse.includes('course') && (lowerResponse.includes('available') || lowerResponse.includes('offer'))) {
        cardHtml = courseFinder;
        cardHeight = 400;
      }

      // Add card if relevant
      if (cardHtml) {
        const cardMsg: Msg = {
          id: (Date.now() + 2).toString(),
          role: 'assistant',
          kind: 'htmlCard',
          html: cardHtml,
          height: cardHeight,
        };
        setMessages((prev) => [...prev, cardMsg]);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMsg: Msg = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        kind: 'text',
        text: 'Sorry, I encountered an error. Please try again.',
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleCardAction = (action: string, payload: string | null) => {
    console.log('Card action received:', action, payload);

    let responseText = '';
    let cardHtml = '';

    if (action === 'enquire') {
      responseText = 'Great! Let me show you the enrollment form for the Python • Data • AI track.';
      cardHtml = generateEnrollmentCard();
    } else if (action === 'viewDetails') {
      responseText = `Here are more details about ${payload || 'this course'}:`;
      cardHtml = generateCourseDetailsCard(payload || 'Python Course');
    } else if (action === 'schedule') {
      responseText = 'Here is our complete schedule for the upcoming cohorts:';
      cardHtml = generateScheduleCard();
    } else {
      responseText = `You clicked: ${action}`;
      cardHtml = generateGenericResponseCard(action, payload);
    }

    const textMsg: Msg = {
      id: Date.now().toString(),
      role: 'assistant',
      kind: 'text',
      text: responseText,
    };

    const cardMsg: Msg = {
      id: (Date.now() + 1).toString(),
      role: 'assistant',
      kind: 'htmlCard',
      html: cardHtml,
      height: 400,
    };

    setMessages((prev) => [...prev, textMsg, cardMsg]);
  };

  const handleTermClick = async (term: string) => {
    console.log('Term clicked:', term);

    // Add user's implicit question
    const implicitQuestion = `What is ${term}?`;

    setIsLoading(true);

    try {
      // Get explanation from Claude
      const response = await sendMessageToClaude(
        `Briefly explain ${term} in the context of programming/technology. Keep it concise (2-3 sentences).`,
        conversationHistory
      );

      const explanationMsg: Msg = {
        id: Date.now().toString(),
        role: 'assistant',
        kind: 'text',
        text: response.message,
      };

      setMessages((prev) => [...prev, explanationMsg]);

      // Update conversation history
      setConversationHistory((prev) => [
        ...prev,
        { role: 'user', content: implicitQuestion },
        { role: 'assistant', content: response.message },
      ]);
    } catch (error) {
      console.error('Error getting term explanation:', error);
      const errorMsg: Msg = {
        id: Date.now().toString(),
        role: 'assistant',
        kind: 'text',
        text: `Sorry, I couldn't fetch information about ${term} right now.`,
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Top bar - Mobile first */}
      <div className="bg-white border-b border-slate-200 px-4 sm:px-6 py-3 sm:py-4 shadow-sm">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-800">SkillMount</h1>
            <p className="text-[10px] sm:text-xs text-slate-500">EFA • Ainager</p>
          </div>
          <button className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-md">
            <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="text-sm sm:text-base font-medium">Call</span>
          </button>
        </div>
      </div>

      {/* Chat stream - Mobile optimized */}
      <div className="flex-1 overflow-y-auto px-2 sm:px-6 py-4 sm:py-6">
        <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`${
                  msg.kind === 'htmlCard'
                    ? 'w-full sm:max-w-[85%]'
                    : 'max-w-[85%] sm:max-w-[75%]'
                } ${
                  msg.role === 'user'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-slate-800 border border-slate-200'
                } rounded-2xl shadow-md overflow-hidden`}
              >
                {msg.kind === 'text' && (
                  <div className="px-3 sm:px-5 py-2 sm:py-3">
                    {msg.role === 'assistant' ? (
                      <TextMessage text={msg.text || ''} onTermClick={handleTermClick} />
                    ) : (
                      <p className="text-xs sm:text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                    )}
                  </div>
                )}

                {msg.kind === 'image' && msg.imageUrl && (
                  <img
                    src={msg.imageUrl}
                    alt="Shared content"
                    className="w-full h-auto"
                  />
                )}

                {msg.kind === 'htmlCard' && msg.html && (
                  <HtmlCardMessage
                    html={msg.html}
                    initialHeight={msg.height}
                    onAction={handleCardAction}
                  />
                )}
              </div>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>
      </div>

      {/* Composer (bottom) - Mobile optimized */}
      <div className="bg-white border-t border-slate-200 px-3 sm:px-6 py-3 sm:py-4 shadow-lg safe-area-bottom">
        <div className="max-w-4xl mx-auto flex items-end gap-2 sm:gap-3">
          {/* Voice button (left) */}
          <button
            className="flex-shrink-0 p-2 sm:p-3 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-slate-700 rounded-xl transition-colors touch-manipulation"
            aria-label="Voice input"
          >
            <Mic className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Textarea (middle) */}
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            rows={1}
            disabled={isLoading}
            className="flex-1 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-slate-50 border border-slate-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-slate-800 placeholder-slate-400 disabled:opacity-50 disabled:cursor-not-allowed"
          />

          {/* Send button (right) */}
          <button
            onClick={handleSend}
            disabled={isLoading}
            className="flex-shrink-0 p-2 sm:p-3 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white rounded-xl transition-colors shadow-md touch-manipulation disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Send message"
          >
            {isLoading ? (
              <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
            ) : (
              <Send className="w-4 h-4 sm:w-5 sm:h-5" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
