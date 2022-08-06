import Slider, { Settings } from "react-slick";
import detectDevice from "../../../shared/utils/isTouch";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/outline";
import { ReactElement } from "react";
import { Link, To } from "react-router-dom";

interface SliderProps {
  className?: string;
  title: string;
  children: ReactElement[] | ReactElement | any;
  link?: any;
}

const SlickArrowLeft: React.FC<{ currentSlide?: any; slideCount?: any }> = ({
  currentSlide,
  slideCount,
  ...props
}) => (
  <button
    {...props}
    className={
      "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
    }
    aria-hidden="true"
    aria-disabled={currentSlide === 0 ? true : false}
    type="button"
  >
    <ChevronLeftIcon />
  </button>
);

const SlickArrowRight: React.FC<{ currentSlide?: any; slideCount?: any }> = ({
  currentSlide,
  slideCount,
  ...props
}) => (
  <button
    {...props}
    className={
      "slick-next slick-arrow" +
      (currentSlide === slideCount - 1 ? " slick-disabled" : "")
    }
    aria-hidden="true"
    aria-disabled={currentSlide === slideCount - 1 ? true : false}
    type="button"
  >
    <ChevronRightIcon />
  </button>
);

const SliderC: React.FC<SliderProps> = ({
  children,
  className,
  title,
  link,
}) => {
  const isTouch = detectDevice();
  const settings: Settings = {
    dots: false,
    infinite: children?.length > 4 ? true : false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };
  return (
    <div
      className={`${className} my-3 md:mt-0 md:mb-8 md:bg-white md:py-8  rounded-md`}
    >
      <p className="opacity-90 px-4 md:px-12 mb-4 text-xl font-semibold flex items-center">
        <span>{title}</span>
        <span className="text-primary font-bold ml-5  items-center text-sm hidden md:flex">
          {link && (
            <Link to={link}>
              {" "}
              <span>Alle durchstöbern</span>
            </Link>
          )}
          <ChevronRightIcon className="w-4 h-4 ml-1" />
        </span>
      </p>
      {isTouch ? (
        <div
          className={`relative w-full flex    snap-x px-4 snap-mandatory overflow-x-auto scroll-container pb-3`}
        >
          {children}
        </div>
      ) : (
        <Slider key={title} {...settings} className="sliderContainer">
          {children}
        </Slider>
      )}
    </div>
  );
};

export default SliderC;
