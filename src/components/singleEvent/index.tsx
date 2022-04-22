import React from "react";
import { EventDetails } from "./eventDetails/EventDetails";
import { EventHeader } from "./eventHeader/EventHeader";
import { Slider } from "./slider/Slider";

export const SingleEvent = () => {
  return (
    <>
      <Slider />
      <div className="p-5">
        <EventHeader />
        <EventDetails />
      </div>
    </>
  );
};
