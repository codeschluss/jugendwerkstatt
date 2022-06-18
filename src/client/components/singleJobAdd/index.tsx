import React from "react";
import { useParams } from "react-router-dom";
import {
  useAddEventFavoriteMutation,
  useAddJobAdFavoriteMutation,
  useGetJobAdQuery,
  useGetMeFavoritesQuery,
} from "../../../GraphQl/graphql";
import { EventDetails } from "../singleEvent/eventDetails/EventDetails";
import { JobHeader } from "./jobHeader";
import { TitleImgSlider } from "../singleEvent/slider/Slider";
import SideBar from "../filter/SideBar";
export const SingleJobAdd = () => {
  const params = useParams();

  const jobsQuery = useGetJobAdQuery({
    variables: {
      entity: {
        id: params.id,
      },
    },
  });

  const [jobFavorites] = useAddJobAdFavoriteMutation();

  const favorites = useGetMeFavoritesQuery({
    fetchPolicy: "network-only",
  });

  const checkId = (obj: any) => obj.id === jobsQuery?.data?.getJobAd?.id;
  const hasId = favorites?.data?.me?.favoriteJobAds?.some(checkId);

  const refetchQueries = () => {
    jobsQuery.refetch();
    favorites.refetch();
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row">
        <TitleImgSlider
          title={jobsQuery.data?.getJobAd?.title}
          colorBg={jobsQuery.data?.getJobAd?.type?.color}
        />
        <div className="p-5 md:w-1/2 md:ml-8 md:flex-grow rounded-md bg-white">
          <JobHeader
            isFavorite={hasId}
            url={`job/${params.id}`}
            eventName={
              jobsQuery.data?.getJobAd?.company?.name || null || undefined
            }
            setFavorite={() =>
              jobFavorites({
                variables: {
                  jobAdId: jobsQuery?.data?.getJobAd?.id,
                },
              }).then(() => refetchQueries())
            }
          />
          <EventDetails
            street={
              jobsQuery.data?.getJobAd?.company?.address?.street ||
              null ||
              undefined
            }
            houseNr={
              jobsQuery.data?.getJobAd?.company?.address?.houseNumber ||
              null ||
              undefined
            }
            plz={
              jobsQuery.data?.getJobAd?.company?.address?.postalCode ||
              null ||
              undefined
            }
            place={
              jobsQuery.data?.getJobAd?.company?.address?.place ||
              null ||
              undefined
            }
            tel={jobsQuery.data?.getJobAd?.company?.phone || null || undefined}
            email={jobsQuery.data?.getJobAd?.company?.mail || null || undefined}
            web={
              jobsQuery.data?.getJobAd?.company?.website || null || undefined
            }
            group={jobsQuery.data?.getJobAd?.company?.name || null || undefined}
            dueDate={jobsQuery.data?.getJobAd?.dueDate}
            startDate={jobsQuery.data?.getJobAd?.startDate}
            theRest={
              jobsQuery.data?.getJobAd?.company?.name || null || undefined
            }
            description={
              jobsQuery.data?.getJobAd?.company?.mail || null || undefined
            }
          />
        </div>
      </div>
      <div className="hidden md:block p-5 rounded-md bg-white mt-8">
        <p className="text-3xl">{jobsQuery.data?.getJobAd?.company?.name}</p>
        <p>{jobsQuery.data?.getJobAd?.content}</p>
      </div>
    </div>
  );
};
export default SingleJobAdd;
