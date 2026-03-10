interface SectionTagProps {
  children: string;
  className?: string;
  style?: React.CSSProperties;
}

const SectionTag = ({ children, className = "", style }: SectionTagProps) => (
  <div className={`section-tag ${className}`} style={style}>
    {children}
  </div>
);

export default SectionTag;
