import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EventEntity, useGetEventsQuery } from "../../../GraphQl/graphql";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/de";

import "./eventsCalendarAndTimeStyle.css";

const EventsCalendar: React.FC = () => {
  const navigate = useNavigate();
  function goBack() {
    navigate(-1);
  }

  const localizer = momentLocalizer(moment);

  const [eventsData, setEventsData] = useState<EventEntity | any>();
  const result = useGetEventsQuery();
  useEffect(() => {
    if (result.data) {
      setEventsData(result?.data?.getEvents?.result);
    }
  }, [result.data]);

  var datesOnEvents: any = [];
  var temmmpCounter = 0;
  {
    eventsData?.map((singleEvent: EventEntity) => {
      var tempSchedules = singleEvent?.schedules as any;

      for (let i = 0; i < tempSchedules?.length; i++) {
        datesOnEvents[temmmpCounter] = {
          id: temmmpCounter,
          eventId: singleEvent.id,
          start: new Date(tempSchedules[i]?.startDate),
          end: new Date(tempSchedules[i]?.endDate),
          allDay: true,
        };
        temmmpCounter = temmmpCounter + 1;
      }
    });
  }

  var finalDatesEvents = [];

  if (datesOnEvents.length > 0) {
    var minDate = datesOnEvents[0].start;
    var maxDate = datesOnEvents[0].end;

    if (datesOnEvents.length > 1) {
      for (let i = 1; i < datesOnEvents?.length; i++) {
        if (datesOnEvents[i].start < minDate) {
          minDate = datesOnEvents[i].start;
        }

        if (datesOnEvents[i].end > maxDate) {
          maxDate = datesOnEvents[i].end;
        }
      }
    }

    minDate = new Date(
      minDate.getFullYear(),
      minDate.getMonth(),
      minDate.getDate()
    );
    maxDate = new Date(
      maxDate.getFullYear(),
      maxDate.getMonth(),
      maxDate.getDate()
    );

    var idCounter = 0;
    var beginningTempDate = minDate;
    var endTempDate = moment(beginningTempDate).add(1, "d").toDate();

    while (beginningTempDate <= maxDate) {
      var numberOfEventsPerDate = 0;
      var tempEventsIds: string | any[] = [];

      for (let i = 0; i < datesOnEvents?.length; i++) {
        if (
          ((datesOnEvents[i].start <= beginningTempDate &&
            datesOnEvents[i].end >= beginningTempDate) ||
            (datesOnEvents[i].start >= beginningTempDate &&
              datesOnEvents[i].end < endTempDate) ||
            (datesOnEvents[i].start < endTempDate &&
              datesOnEvents[i].end > endTempDate)) &&
          tempEventsIds.indexOf(datesOnEvents[i].eventId) <= -1
        ) {
          numberOfEventsPerDate++;
          tempEventsIds.push(datesOnEvents[i].eventId);
        }
      }

      if (numberOfEventsPerDate > 0) {
        finalDatesEvents[idCounter] = {
          id: idCounter,
          numberOfEvents: numberOfEventsPerDate,
          allDay: true,
          start: beginningTempDate,
          end: beginningTempDate,
        };

        idCounter++;
      }

      beginningTempDate = moment(beginningTempDate).add(1, "d").toDate();
      endTempDate = moment(endTempDate).add(1, "d").toDate();
    }
  }

  const event = ({ event }: any) => {
    var dateParameter = event.start;
    dateParameter =
      dateParameter.getFullYear() +
      "." +
      (dateParameter.getMonth() + 1) +
      "." +
      dateParameter.getDate();
    return (
      <a
        className="anchor-number-of-events "
        href={"/eventsTime?date=" + dateParameter}
      >
        {event.numberOfEvents}{" "}
        V&shy;e&shy;r&shy;a&shy;n&shy;s&shy;t&shy;a&shy;l&shy;t&shy;u&shy;n&shy;g&shy;e&shy;n
      </a>
    );
  };

  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-white z-10">
      <div className="flex bg-primary h-[6.5rem] text-white">
        <div className="my-auto relative">
          <button
            className="absolute inline ml-5 -mt-3"
            onClick={goBack}
            style={{ zIndex: 2 }}
          >
            <svg
              className="inline"
              width="12"
              height="18"
              viewBox="0 0 12 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.25125 17.5L11.2487 15.5025L4.76041 9L11.2487 2.4975L9.25125 0.499996L0.751249 9L9.25125 17.5Z"
                fill="white"
              />
            </svg>
          </button>
          <div
            className="inline w-screen absolute left-0 text-center -mt-4"
            style={{ zIndex: 1 }}
          >
            <span id="testId" className="text-2xl font-light text-center pt-20">
              Veranstaltungskalender
            </span>
          </div>
        </div>
      </div>
      <Calendar
        className="max-w-2xl mx-auto customized-monthly-calendar"
        localizer={localizer}
        events={finalDatesEvents}
        components={{ event: event }}
        view={"month"}
        views={{ month: true }}
        startAccessor="start"
        endAccessor="end"
        style={{ maxHeight: 450 }}
        dayLayoutAlgorithm={"no-overlap"}
      />
    </div>
  );
};

export default EventsCalendar;
