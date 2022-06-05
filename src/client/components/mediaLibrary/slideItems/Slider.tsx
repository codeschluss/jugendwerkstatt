interface SliderProps {
  key: string;
  topicTitle: string;
}

const Slider: React.FC<SliderProps> = ({ children, topicTitle }) => {
  return (
    <div className="my-3 bg-white"> 
      <p className="opacity-90 px-4 mb-4 text-xl lg:pl-14">{topicTitle}</p>
      <div className="flex gap-4 px-4 pb-3 overflow-x-auto lg:overflow-x-hidden possiblyOverflowing">
        {children}
      </div>
    </div>
  );
};

export default Slider;
