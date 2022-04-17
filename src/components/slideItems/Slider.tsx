interface SliderProps {
  className?: string;
  title?: string;
}

const Slider: React.FC<SliderProps> = ({ children, className, title }) => {
  return (
    <div className={`${className} my-3`}>
      <p className="opacity-90 px-4 mb-4 text-xl">{title}</p>
      <div
        className={`relative w-full flex gap-4 snap-x px-4 snap-mandatory overflow-x-auto scroll-container pb-3`}
      >
        {children}
      </div>
    </div>
  );
};

export default Slider;
