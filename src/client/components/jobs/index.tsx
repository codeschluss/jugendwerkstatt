import Slider from "../slideItems/Slider";
import SlideCard from "../slideItems/SlideCard";
import {
  JobAdEntity,
  JobTypeEntity,
  useGetJobTypesQuery,
} from "../../../GraphQl/graphql";
import { useEffect, useState } from "react";

const Jobs = () => {
  const [typesData, setTypesData] = useState<JobTypeEntity | any>();
  const result = useGetJobTypesQuery();
  console.log(console.log(result.data?.getJobTypes?.result));

  useEffect(() => {
    if (result?.data) {
      // setCategoriesData(result?.data?.getEventCategories?.result);
      setTypesData(result?.data?.getJobTypes?.result);
    }
  }, [result.data]);

  return (
    <div className="p-4 m-auto">
      {typesData?.map((category: JobTypeEntity) => {
        return (
          <Slider
            title={category?.name || ""}
            className="-mx-4"
            key={category?.id}
          >
            {category?.jobAds?.map((el: JobAdEntity | any) => {
              return (
                <SlideCard
                  key={el.id}
                  gradient={false}
                  route={`/job-ad/${el.id}`}
                  eventName={el?.title}
                  location={`${el?.company?.name}`}
                  date={el?.dueDate}
                  color={category?.color}
                />
              );
            })}
          </Slider>
        );
      })}
    </div>
  );
};

export default Jobs;
