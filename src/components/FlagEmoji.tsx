interface FlagEmojiProps {
  flag: string;
  size?: number;
  className?: string;
}

const FlagEmoji = ({ flag, size = 20, className = '' }: FlagEmojiProps) => (
  <span
    className={`inline-block transition-all duration-300 ${className}`}
    style={{
      fontSize: size,
      filter: 'grayscale(100%) brightness(1.8)',
      opacity: 0.5,
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.filter = 'grayscale(0%) brightness(1)';
      e.currentTarget.style.opacity = '1';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.filter = 'grayscale(100%) brightness(1.8)';
      e.currentTarget.style.opacity = '0.5';
    }}
  >
    {flag}
  </span>
);

/**
 * Variant that responds to parent group hover instead of self hover.
 * Use inside elements with className="group".
 */
export const FlagEmojiGroup = ({ flag, size = 20, className = '' }: FlagEmojiProps) => (
  <span
    className={`inline-block transition-all duration-300 group-hover:![filter:grayscale(0%)_brightness(1)] group-hover:!opacity-100 ${className}`}
    style={{
      fontSize: size,
      filter: 'grayscale(100%) brightness(1.8)',
      opacity: 0.5,
    }}
  >
    {flag}
  </span>
);

export default FlagEmoji;
