import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { EventEntity, useGetEventsQuery } from "../../../GraphQl/graphql";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/de";

import "./eventsCalendarAndTimeStyle.css";

const EventsCalendar: React.FC = () => {
  let currentDate = new Date();

  const currentUrl = window.location.href;
  if (currentUrl.indexOf("?date=") !== -1) {
    const currentListStringDate = currentUrl.split("?date=")[1].split(".");
    currentDate = new Date(
      parseInt(currentListStringDate[0]),
      parseInt(currentListStringDate[1]) - 1,
      parseInt(currentListStringDate[2])
    );
  }

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
        if (
          new Date(tempSchedules[i]?.startDate) <=
          new Date(tempSchedules[i]?.endDate)
        ) {
          //validating bad schedules
          datesOnEvents[temmmpCounter] = {
            id: temmmpCounter,
            eventId: singleEvent.id,
            name: singleEvent.name,
            description: singleEvent.description,
            start: new Date(tempSchedules[i]?.startDate),
            end: new Date(tempSchedules[i]?.endDate),
            allDay: true,
          };
          temmmpCounter = temmmpCounter + 1;
        }
      }
    });
  }

  var finalDatesEvents: any[] | undefined = [];

  var minDate = currentDate;
  if (datesOnEvents.length > 0) {
    minDate = datesOnEvents[0].start;
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

  const event_dates = ({ event }: any) => {
    var dateParameter = event.start;
    dateParameter =
      dateParameter.getFullYear() +
      "." +
      (dateParameter.getMonth() + 1) +
      "." +
      dateParameter.getDate();
    if (window.innerWidth >= 1024) {
      return (
        <Link
          className="anchor-number-of-events "
          to={{ search: "?date=" + dateParameter }}
        >
          {event.numberOfEvents}{" "}
          V&shy;e&shy;r&shy;a&shy;n&shy;s&shy;t&shy;a&shy;l&shy;t&shy;u&shy;n&shy;g&shy;e&shy;n
        </Link>
      );
    } else {
      return (
        <Link
          className="anchor-number-of-events "
          to={"/events/time?date=" + dateParameter}
        >
          {event.numberOfEvents}{" "}
          V&shy;e&shy;r&shy;a&shy;n&shy;s&shy;t&shy;a&shy;l&shy;t&shy;u&shy;n&shy;g&shy;e&shy;n
        </Link>
      );
    }
  };

  var finalHourlyEvents: any[] | undefined = [];
  if (datesOnEvents.length > 0) {
    var minHourlyDate = datesOnEvents[0].start;
    var maxHourlyDate = datesOnEvents[0].end;

    if (datesOnEvents.length > 1) {
      for (let i = 1; i < datesOnEvents?.length; i++) {
        if (datesOnEvents[i].start < minHourlyDate) {
          minHourlyDate = datesOnEvents[i].start;
        }

        if (datesOnEvents[i].end > maxHourlyDate) {
          maxHourlyDate = datesOnEvents[i].end;
        }
      }
    }

    minHourlyDate = new Date(
      minHourlyDate.getFullYear(),
      minHourlyDate.getMonth(),
      minHourlyDate.getDate()
    );
    maxHourlyDate = new Date(
      maxHourlyDate.getFullYear(),
      maxHourlyDate.getMonth(),
      maxHourlyDate.getDate()
    );

    var beginTempDate = minHourlyDate;
    var endTempDate = moment(beginTempDate).add(1, "d").toDate();

    while (true) {
      for (let i = 0; i < datesOnEvents?.length; i++) {
        datesOnEvents[i].allDay = false;
        if (
          datesOnEvents[i].start >= beginTempDate &&
          datesOnEvents[i].end <= endTempDate
        ) {
          if (datesOnEvents[i].end.getTime() === endTempDate.getTime()) {
            var tempEvent = Object.assign({}, datesOnEvents[i]);
            tempEvent.end = moment(endTempDate).subtract(1, "s").toDate();
            finalHourlyEvents.push(tempEvent);
          } else {
            finalHourlyEvents.push(Object.assign({}, datesOnEvents[i]));
          }
        } else if (
          datesOnEvents[i].start < beginTempDate &&
          datesOnEvents[i].end > beginTempDate &&
          datesOnEvents[i].end <= endTempDate
        ) {
          var tempEvent = Object.assign({}, datesOnEvents[i]);
          tempEvent.start = beginTempDate;
          finalHourlyEvents.push(tempEvent);
        } else if (
          datesOnEvents[i].start < endTempDate &&
          datesOnEvents[i].start >= beginTempDate &&
          datesOnEvents[i].end >= endTempDate
        ) {
          var tempEvent = Object.assign({}, datesOnEvents[i]);
          tempEvent.end = moment(endTempDate).subtract(1, "s").toDate();
          finalHourlyEvents.push(tempEvent);
        } else if (
          datesOnEvents[i].start < beginTempDate &&
          datesOnEvents[i].end > endTempDate
        ) {
          var tempEvent = Object.assign({}, datesOnEvents[i]);
          tempEvent.start = beginTempDate;
          tempEvent.end = moment(endTempDate).subtract(1, "s").toDate();
          finalHourlyEvents.push(tempEvent);
        }
      }

      beginTempDate = moment(beginTempDate).add(1, "d").toDate();
      endTempDate = moment(endTempDate).add(1, "d").toDate();
      if (beginTempDate.valueOf() > maxHourlyDate.valueOf()) {
        break;
      }
    }
  }

  const event_hourly = ({ event }: any) => {
    var dateParameter = event.start;
    dateParameter =
      dateParameter.getFullYear() +
      "." +
      dateParameter.getMonth() +
      "." +
      dateParameter.getDate();
    return (
      <div>
        {event.name}
        <br />
        <div>{event.description}</div>
      </div>
    );
  };

  return (
    <div className=" md:m-12 lg:relative top-0 left-0  h-screen lg:w-full lg:h-full bg-[#f7f7f7] z-10 lg:z-auto pt-0">
      <div className="lg:hidden flex bg-primary h-[6.5rem] text-white">
        <div className="relative my-auto">
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
            className="absolute left-0 inline w-screen -mt-4 text-center"
            style={{ zIndex: 1 }}
          >
            <span id="testId" className="pt-20 text-2xl font-light text-center">
              Veranstaltungskalender
            </span>
          </div>
        </div>
      </div>
      <div className="items-center justify-center hidden text-3xl font-semibold lg:flex">
        <div className="w-full p-2 bg-white rounded-md">Kalender</div>
      </div>
      <div className="flex items-center justify-center mt-0 lg:justify-start lg:mt-5">
        <Calendar
          className="w-full max-w-2xl pb-10 mx-auto bg-white customized-monthly-calendar lg:mx-0"
          localizer={localizer}
          events={finalDatesEvents}
          components={{ event: event_dates }}
          view={"month"}
          views={{ month: true }}
          onView={() => null}
          startAccessor="start"
          endAccessor="end"
          onNavigate={() => null}
          style={{ maxHeight: 520 }}
          dayLayoutAlgorithm={"no-overlap"}
          defaultDate={currentDate}
          messages={{ next: "Nächste", previous: "Zurück", today: "Heute" }}
        />

        <Calendar
          className="customized-daily-calendar max-w-2xl min-w-[400px] ml-14 overflow-y-scroll hidden md:block lg:inline "
          localizer={localizer}
          events={finalHourlyEvents}
          components={{ event: event_hourly }}
          view={"day"}
          views={{ day: true }}
          onView={() => null}
          startAccessor="start"
          endAccessor="end"
          style={{ maxHeight: 500, backgroundColor: "white" }}
          dayLayoutAlgorithm={"no-overlap"}
          showMultiDayTimes={false}
          onNavigate={() => null}
          messages={{ next: "Nächste", previous: "Zurück", today: "Heute" }}
          // defaultDate={currentDate} //if this parameter is used and not date, then it doesn't change the date of this calendar when a date is clicked on the previous calendar
          date={currentDate} //if this parameter is used and not defaultDate, then the date of this calndar changes when a date is click in the previous calendar BUT you can't use the buttons on toolbar
        />
      </div>
    </div>
  );
};

export default EventsCalendar;
