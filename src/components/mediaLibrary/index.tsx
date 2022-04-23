import { LinkCategoryEntity, useGetLinkCategoriesQuery } from "../../GraphQl/graphql";
import Slider from "./slideItems/Slider";
import SlideCard from "./slideItems/SlideCard";

const Homepage: React.FC = () => {
  const result = useGetLinkCategoriesQuery({
    variables: {
      params: {
        //sort: 'name',
      }
    }
  });

  const fetchedData: [LinkCategoryEntity] = result.data?.getLinkCategories?.result as [LinkCategoryEntity];
  console.log(fetchedData);

  return (
    <div className="mt-8">
      {
      fetchedData?.map((singleTopic) => {
        return(
          <Slider topicTitle={`${singleTopic?.name}`}>
            {
              singleTopic?.link?.map((singleVideo) => {
                return (
                  <SlideCard videoTitle={`${singleVideo?.title}`} videoUrl={`${singleVideo?.url}`} />
                )
              })
            }
          </Slider>
        )
      })}
    </div>
  );
};

export default Homepage;