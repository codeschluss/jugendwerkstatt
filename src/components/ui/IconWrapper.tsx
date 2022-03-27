interface IconWrapperProps {
  className?: string;
  onClick?: () => void;
}

const IconWrapper: React.FC<IconWrapperProps> = ({
  className,
  children,
  onClick,
}) => (
  <span
    onClick={onClick}
    className={`${className} w-10 h-10 flex justify-center items-center flex-none`}
  >
    <span className="w-5 h-5">{children}</span>
  </span>
);

export default IconWrapper;
