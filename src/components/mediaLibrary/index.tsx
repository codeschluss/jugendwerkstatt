import { LinkCategoryEntity, useGetLinkCategoriesQuery } from "../../GraphQl/graphql";
import Slider from "./slideItems/Slider";
import SlideCard from "./slideItems/SlideCard";
import { useEffect } from "react";

const MediaLibrary: React.FC = () => {

  const result = useGetLinkCategoriesQuery({
    variables: {
      params: {
        //sort: 'name',
      }
    }
  });

  const scrollPrevious = (event: any) => {
    let divElementForScroll = event.currentTarget.parentNode.nextSibling.children[1];
    let scrollXposition = divElementForScroll.scrollLeft;

    divElementForScroll.scrollTo({top: 0, left: scrollXposition-246, behavior: 'smooth' } );
  };

  const scrollNext = (event: any) => {
    let divElementForScroll = event.currentTarget.parentNode.previousSibling.children[1];
    let scrollXposition = divElementForScroll.scrollLeft;

    divElementForScroll.scrollTo({top: 0, left: scrollXposition+246, behavior: 'smooth' } );
  };

  const MouseOver = (event: any) => {
    let gElement = event.currentTarget.children[0].children[2];
    gElement.style.filter = "url(#black-shadow)";

  };

  const MouseOut = (event: any) => {
    let gElement = event.currentTarget.children[0].children[2];
    gElement.style.filter = "url(#grey-shadow)";
  };

  function showOrHideArrows() {
    
    if(window.innerWidth>=1024){
      
      var elements = document.getElementsByClassName("possiblyOverflowing");
      for (var i = 0, len = elements.length; i < len; i++) {
        var singleElement = elements[i];
        var isOverFlowing = singleElement.scrollWidth > singleElement.clientWidth;

        let previousArrowElement : any = singleElement.parentNode?.previousSibling;
        let nextArrowElement : any = singleElement.parentNode?.previousSibling;
        if(isOverFlowing){
          previousArrowElement.style.display = 'inline';
          nextArrowElement.style.display = 'inline';
        }
        else{
          previousArrowElement.style.display = 'none';
          nextArrowElement.style.display = 'none';
        }
      }
    }
  }

  useEffect(() => {
    showOrHideArrows();
  });

  window.addEventListener('resize', showOrHideArrows)  
  
  const fetchedData: [LinkCategoryEntity] = result.data?.getLinkCategories?.result as [LinkCategoryEntity];

  return (
    <div className="pt-8 lg:p-8 lg:bg-[#fff7f7]">
      {
      fetchedData?.map((singleTopic) => {
        return(
          <div className="relative">
            <div className="absolute h-[9rem] z-10">
              <button className="mt-11 pl-4 h-[5.5rem] hidden lg:inline" onClick={scrollPrevious} onMouseOver={MouseOver} onMouseOut={MouseOut}>
                <svg height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <filter id='grey-shadow' color-interpolation-filters="sRGB">
                    <feDropShadow 
                    flood-color='grey' dx="0" dy="0" stdDeviation="3" flood-opacity="1"/>
                  </filter>
                  <filter id='black-shadow' color-interpolation-filters="sRGB">
                    <feDropShadow 
                    flood-color='black' dx="0" dy="0" stdDeviation="3" flood-opacity="1"/>
                  </filter>
                  <g filter="url(#grey-shadow)">
                    <path d="M23.78 5.1598L21.4066 2.7998L8.21997 15.9998L21.42 29.1998L23.78 26.8398L12.94 15.9998L23.78 5.1598Z" fill="white"/>
                  </g>
                </svg>
              </button>
            </div>
            <Slider key={`${singleTopic?.id}`} topicTitle={`${singleTopic?.name}`}>
            {
              singleTopic?.link?.map((singleVideo) => {
                return (
                  <SlideCard key={`${singleVideo?.id}`} videoTitle={`${singleVideo?.title}`} videoUrl={`${singleVideo?.url}`} />
                )
              })
            }
            </Slider>
            <div className="absolute h-[9rem] z-10 right-0 top-0">
              <button className="mt-11 pr-1 h-[5.5rem]" onClick={scrollNext} onMouseOver={MouseOver} onMouseOut={MouseOut}>
                <svg height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <filter id='grey-shadow' color-interpolation-filters="sRGB">
                    <feDropShadow 
                    flood-color='grey' dx="0" dy="0" stdDeviation="3" flood-opacity="1"/>
                  </filter>
                  <filter id='black-shadow' color-interpolation-filters="sRGB">
                    <feDropShadow 
                    flood-color='black' dx="0" dy="0" stdDeviation="3" flood-opacity="1"/>
                  </filter>
                  <g filter="url(#grey-shadow)">
                  <path d="M8.15356 26.9732L10.5136 29.3332L23.8469 15.9998L10.5136 2.6665L8.15356 5.0265L19.1269 15.9998L8.15356 26.9732Z" fill="white"/>
                  </g>
                </svg>
              </button>
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default MediaLibrary;