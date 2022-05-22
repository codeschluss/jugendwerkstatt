import React from "react";
import { useParams } from "react-router-dom";
import { useGetJobAdQuery } from "../../GraphQl/graphql";
import { EventDetails } from "../singleEvent/eventDetails/EventDetails";
import { EventHeader } from "../singleEvent/eventHeader/EventHeader";
import { Slider } from "../singleEvent/slider/Slider";

const JobDetails: React.FC = () => {
  const params = useParams();

  const { data, loading, error } = useGetJobAdQuery({
    variables: {
      entity: {
        id: params.id,
      },
    },
  });

  return (
    <>
      <Slider
        title={data?.getJobAd?.title}
        colorBg={data?.getJobAd?.type?.color}
      />
      <div className="p-5">
        <EventHeader
          eventName={data?.getJobAd?.company?.name || null || undefined}
        />
        <EventDetails
          street={data?.getJobAd?.company?.address?.street || null || undefined}
          houseNr={
            data?.getJobAd?.company?.address?.houseNumber || null || undefined
          }
          plz={
            data?.getJobAd?.company?.address?.postalCode || null || undefined
          }
          place={data?.getJobAd?.company?.address?.place || null || undefined}
          tel={data?.getJobAd?.company?.phone || null || undefined}
          email={data?.getJobAd?.company?.mail || null || undefined}
          web={data?.getJobAd?.company?.website || null || undefined}
          group={data?.getJobAd?.company?.name || null || undefined}
          schedule={data?.getJobAd?.dueDate}
          startDate={data?.getJobAd?.dueDate}
          theRest={data?.getJobAd?.company?.name || null || undefined}
          description={data?.getJobAd?.company?.mail || null || undefined}
        />
      </div>
    </>
  );
};

export default JobDetails;
