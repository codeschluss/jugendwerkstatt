import React from "react";
import { useParams } from "react-router-dom";
import { useGetEventQuery } from "../../GraphQl/graphql";
import { EventDetails } from "./eventDetails/EventDetails";
import { EventHeader } from "./eventHeader/EventHeader";
import { Slider } from "./slider/Slider";

export const SingleEvent = () => {
  const params = useParams();

  const { data, loading, error } = useGetEventQuery({
    variables: { id: params.id || "" },
  });
  if (data) {
    console.log(
      data?.getEvent?.schedules && data?.getEvent?.schedules[0]?.endDate,
      "datat"
    );
  }
  return (
    <>
      <Slider imgUrl={data?.getEvent?.titleImage?.id} />
      <div className="p-5">
        <EventHeader eventName={data?.getEvent?.name || null || undefined} />
        <EventDetails
          street={data?.getEvent?.address?.street || null || undefined}
          houseNr={data?.getEvent?.address?.houseNumber || null || undefined}
          plz={data?.getEvent?.address?.postalCode || null || undefined}
          place={data?.getEvent?.address?.place || null || undefined}
          tel={data?.getEvent?.organizer?.phone || null || undefined}
          email={data?.getEvent?.organizer?.mail || null || undefined}
          web={data?.getEvent?.organizer?.website || null || undefined}
          group={data?.getEvent?.organizer?.name || null || undefined}
          schedule={
            data?.getEvent?.schedules && data?.getEvent?.schedules[0]?.endDate
          }
          startDate={
            data?.getEvent?.schedules && data?.getEvent?.schedules[0]?.startDate
          }
          theRest={data?.getEvent?.category?.name || null || undefined}
          description={data?.getEvent?.description || null || undefined}
        />
      </div>
    </>
  );
};
