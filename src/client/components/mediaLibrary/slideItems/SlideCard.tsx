interface SlideCardProps {
  key: string;
  videoTitle: string;
  videoUrl: string;
}

const SlideCard: React.FC<SlideCardProps> = ({ videoUrl, videoTitle }) => {
  return (
    <a
      href={videoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="snap-center w-[14.375rem] h-[5.5rem] lg:h-[6rem] overflow-hidden bg-[#C20639] rounded-md flex-none relative p-2
      shadow-inner-2xl
      "
      style={{ boxShadow: "inset 0 0 2.5rem 0 #841c1c" }}
    >
      <div
        className="w-full max-h-[3rem] text-white text-center"
        style={{
          display: "-webkit-box",
          WebkitLineClamp: "2",
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        <span className="text-md">{videoTitle}</span>
      </div>
      <div className="w-full absolute bottom-0 -ml-2">
        <svg
          className="mx-auto mb-2"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM7.5 14.5L14.5 10L7.5 5.5V14.5Z"
            fill="white"
          />
        </svg>
      </div>
    </a>
  );
};

export default SlideCard;
