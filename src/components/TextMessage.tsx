interface TextMessageProps {
  text: string;
  onTermClick?: (term: string) => void;
}

function TextMessage({ text, onTermClick }: TextMessageProps) {
  // Define special terms that should be clickable
  const specialTerms = [
    'Python', 'Data', 'AI', 'NumPy', 'Pandas', 'LLM', 'LLMs',
    'Machine Learning', 'Deep Learning', 'Neural Networks',
    'API', 'REST', 'JSON', 'SQL', 'Database',
    'React', 'JavaScript', 'TypeScript', 'Node.js',
    'Docker', 'Kubernetes', 'AWS', 'Cloud Computing',
    'Git', 'GitHub', 'CI/CD', 'DevOps'
  ];

  // Create regex pattern to match special terms (case-insensitive, word boundaries)
  const pattern = new RegExp(
    `\\b(${specialTerms.join('|')})\\b`,
    'gi'
  );

  // Split text into parts and identify which are special terms
  const parts: Array<{ text: string; isSpecial: boolean; key: string }> = [];
  let lastIndex = 0;
  let match;

  while ((match = pattern.exec(text)) !== null) {
    // Add text before the match
    if (match.index > lastIndex) {
      parts.push({
        text: text.slice(lastIndex, match.index),
        isSpecial: false,
        key: `text-${lastIndex}`
      });
    }

    // Add the matched term
    parts.push({
      text: match[0],
      isSpecial: true,
      key: `term-${match.index}`
    });

    lastIndex = match.index + match[0].length;
  }

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push({
      text: text.slice(lastIndex),
      isSpecial: false,
      key: `text-${lastIndex}`
    });
  }

  // If no matches found, return plain text
  if (parts.length === 0) {
    return <p className="text-xs sm:text-sm leading-relaxed whitespace-pre-wrap">{text}</p>;
  }

  return (
    <p className="text-xs sm:text-sm leading-relaxed whitespace-pre-wrap">
      {parts.map((part) =>
        part.isSpecial ? (
          <button
            key={part.key}
            onClick={(e) => {
              e.preventDefault();
              onTermClick?.(part.text);
            }}
            className="text-blue-500 hover:text-blue-700 underline decoration-dotted underline-offset-2 cursor-pointer font-medium transition-colors"
          >
            {part.text}
          </button>
        ) : (
          <span key={part.key}>{part.text}</span>
        )
      )}
    </p>
  );
}

export default TextMessage;
