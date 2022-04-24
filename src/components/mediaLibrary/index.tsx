import { LinkCategoryEntity, useGetLinkCategoriesQuery } from "../../GraphQl/graphql";
import Slider from "./slideItems/Slider";
import SlideCard from "./slideItems/SlideCard";

const MediaLibrary: React.FC = () => {
  const result = useGetLinkCategoriesQuery({
    variables: {
      params: {
        //sort: 'name',
      }
    }
  });

  const fetchedData: [LinkCategoryEntity] = result.data?.getLinkCategories?.result as [LinkCategoryEntity];

  return (
    <div className="mt-8">
      {
      fetchedData?.map((singleTopic) => {
        return(
          <Slider key={`${singleTopic?.id}`} topicTitle={`${singleTopic?.name}`}>
            {
              singleTopic?.link?.map((singleVideo) => {
                return (
                  <SlideCard key={`${singleVideo?.id}`} videoTitle={`${singleVideo?.title}`} videoUrl={`${singleVideo?.url}`} />
                )
              })
            }
          </Slider>
        )
      })}
    </div>
  );
};

export default MediaLibrary;