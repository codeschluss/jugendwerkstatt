import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EventEntity, useGetEventsQuery } from "../../GraphQl/graphql";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/de";

import "./eventsCalendarAndTimeStyle.css";

const EventsCalendar: React.FC = () => {
    const currentDate = new Date();

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
    {eventsData?.map((singleEvent: EventEntity) => {
        var tempSchedules = singleEvent?.schedules as any;

        for (let i = 0; i < tempSchedules?.length; i++) {
            datesOnEvents[temmmpCounter] = {
                id : temmmpCounter,
                eventId : singleEvent.id,
                start : new Date(tempSchedules[i]?.startDate),
                end : new Date(tempSchedules[i]?.endDate),
                allDay: true
            }
            temmmpCounter = temmmpCounter+1;
        }
    })};

    // var datesOnEvents = [
    //     {
    //         eventId: 0,
    //         numberOfEvents: 3,
    //         allDay: true,
    //         start: new Date(2022,4,6,10),
    //         end: new Date(2022,4,6,13)
    //     },
    //     {
    //         eventId: 1,
    //         numberOfEvents: 3,
    //         allDay: true,
    //         start: new Date(2022,4,6,11),
    //         end: new Date(2022,4,6,14)
    //     },
    //     {
    //         eventId: 2,
    //         numberOfEvents: 3,
    //         allDay: true,
    //         start: new Date(2022,4,6,11),
    //         end: new Date(2022,4,6,14)
    //     },
    //     {
    //         eventId: 3,
    //         numberOfEvents: 1,
    //         allDay: true,
    //         start: new Date(2022,4,18),
    //         end: new Date(2022,4,19)
    //     },
    //     {
    //         eventId: 4,
    //         numberOfEvents: 1,
    //         allDay: true,
    //         start: new Date(2022,4,19),
    //         end: new Date(2022,4,19)
    //     },
    //     {
    //         eventId: 5,
    //         numberOfEvents: 1,
    //         allDay: true,
    //         start: new Date(2022,4,10),
    //         end: new Date(2022,4,10)
    //     },
    //     {
    //         eventId: 6,
    //         numberOfEvents: 1,
    //         allDay: true,
    //         start: new Date(2022,4,12),
    //         end: new Date(2022,4,12)
    //     },
    //     {
    //         eventId: 7,
    //         numberOfEvents: 1,
    //         allDay: true,
    //         start: new Date(2022,3,12),
    //         end: new Date(2022,3,12)
    //     }
    // ];

    var finalDatesEvents: any[] | undefined = [];

    var minDate = currentDate;
    if(datesOnEvents.length>0){
        minDate = datesOnEvents[0].start;
        var maxDate = datesOnEvents[0].end;

        if(datesOnEvents.length>1)
        {
            for (let i = 1; i < datesOnEvents?.length; i++) {
                if(datesOnEvents[i].start<minDate){
                    minDate = datesOnEvents[i].start;
                }

                if(datesOnEvents[i].end>maxDate){
                    maxDate = datesOnEvents[i].end;
                }
            }
        }
        
        minDate = new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate())
        maxDate = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate())
        
        var idCounter = 0;
        var beginningTempDate = minDate;
        var endTempDate =  moment(beginningTempDate).add(1, 'd').toDate();

        while(beginningTempDate<=maxDate){
            var numberOfEventsPerDate = 0;
            var tempEventsIds: string | any[] = [];
    
            for (let i = 0; i < datesOnEvents?.length; i++) {
                if(((datesOnEvents[i].start<=beginningTempDate && datesOnEvents[i].end>=beginningTempDate)||
                    (datesOnEvents[i].start>=beginningTempDate && datesOnEvents[i].end<endTempDate)||
                    (datesOnEvents[i].start<endTempDate && datesOnEvents[i].end>endTempDate)) &&
                    (tempEventsIds.indexOf(datesOnEvents[i].eventId) <= -1)
                    )
                {
                    numberOfEventsPerDate++;
                    tempEventsIds.push(datesOnEvents[i].eventId);
                }
            }

            if(numberOfEventsPerDate>0){
                finalDatesEvents[idCounter] = {
                    id : idCounter,
                    numberOfEvents: numberOfEventsPerDate,
                    allDay: true,
                    start: beginningTempDate,
                    end: beginningTempDate
                }

                idCounter++;
            }

            beginningTempDate = moment(beginningTempDate).add(1, 'd').toDate();
            endTempDate = moment(endTempDate).add(1, 'd').toDate();
        }
    }
    

    const event_dates = ({event}: any) => {
        var dateParameter = event.start;
        dateParameter = dateParameter.getFullYear()+"."+(dateParameter.getMonth()+1)+"."+dateParameter.getDate();
        if(window.innerWidth>=1024){
            return (
                <span className="anchor-number-of-events ">
                    {event.numberOfEvents} V&shy;e&shy;r&shy;a&shy;n&shy;s&shy;t&shy;a&shy;l&shy;t&shy;u&shy;n&shy;g&shy;e&shy;n
                </span>
            );
        }
        else{
            return (
                <a className="anchor-number-of-events " href={"/eventsTime?date="+dateParameter}>
                    {event.numberOfEvents} V&shy;e&shy;r&shy;a&shy;n&shy;s&shy;t&shy;a&shy;l&shy;t&shy;u&shy;n&shy;g&shy;e&shy;n
                </a>
            );
        }
    };


    
    // const datesOnEvents = [
    //     {
    //         id: 0,
    //         name: "First Event",
    //         allDay: false,
    //         start: new Date(2022,4,27,10),
    //         end: new Date(2022,4,29,13)
    //     },
    //     {
    //         id: 1,
    //         name: "Second Event",
    //         allDay: false,
    //         start: new Date(2022,4,29,10),
    //         end: new Date(2022,4,29,14)
    //     },
    //     {
    //         id: 2,
    //         name: "Third Event",
    //         allDay: false,
    //         start: new Date(2022,4,29,12),
    //         end: new Date(2022,4,29,14)
    //     },
    //     {
    //         id: 3,
    //         name: "Fourth Event",
    //         allDay: false,
    //         start: new Date(2022,4,29,11),
    //         end: new Date(2022,4,29,15)
    //     },
    //     {
    //         id: 4,
    //         name: "Fifth Event",
    //         allDay: false,
    //         start: new Date(2022,5,1,11),
    //         end: new Date(2022,5,1,15)
    //     }
    // ];

    // var hourlyEvents = datesOnEvents;
    
    var finalHourlyEvents: any[] | undefined = [];
    if(datesOnEvents.length>0){
        var minHourlyDate = datesOnEvents[0].start;
        var maxHourlyDate = datesOnEvents[0].end;
        
        if(datesOnEvents.length>1)
        {
            for (let i = 1; i < datesOnEvents?.length; i++) {
                if(datesOnEvents[i].start<minHourlyDate){
                    minHourlyDate = datesOnEvents[i].start;
                }
    
                if(datesOnEvents[i].end>maxHourlyDate){
                    maxHourlyDate = datesOnEvents[i].end;
                }
            }
        }

        minHourlyDate = new Date(minHourlyDate.getFullYear(), minHourlyDate.getMonth(), minHourlyDate.getDate());
        maxHourlyDate = new Date(maxHourlyDate.getFullYear(), maxHourlyDate.getMonth(), maxHourlyDate.getDate());
        
        var beginTempDate =  minHourlyDate;
        var endTempDate =  moment(beginTempDate).add(1, 'd').toDate();

        while(true){
            for (let i = 0; i < datesOnEvents?.length; i++) {
                datesOnEvents[i].allDay = false;
                if(datesOnEvents[i].start>=beginTempDate && datesOnEvents[i].end<=endTempDate){
                    if(datesOnEvents[i].end.getTime()===endTempDate.getTime()){
                        var tempEvent = Object.assign({}, datesOnEvents[i]);
                        tempEvent.end = moment(endTempDate).subtract(1, 's').toDate();
                        finalHourlyEvents.push(tempEvent);
                    }
                    else{
                        finalHourlyEvents.push(Object.assign({}, datesOnEvents[i]));
                    }
                }
                else if(datesOnEvents[i].start<beginTempDate && datesOnEvents[i].end>beginTempDate && datesOnEvents[i].end<=endTempDate){
                    var tempEvent = Object.assign({}, datesOnEvents[i]);
                    tempEvent.start = beginTempDate;
                    finalHourlyEvents.push(tempEvent);
                }
                else if(datesOnEvents[i].start<endTempDate && datesOnEvents[i].start>=beginTempDate && datesOnEvents[i].end>=endTempDate){
                    var tempEvent = Object.assign({}, datesOnEvents[i]);
                    tempEvent.end = moment(endTempDate).subtract(1, 's').toDate();
                    finalHourlyEvents.push(tempEvent);
                }
                else if(datesOnEvents[i].start<beginTempDate && datesOnEvents[i].end>endTempDate){
                    var tempEvent = Object.assign({}, datesOnEvents[i]);
                    tempEvent.start = beginTempDate;
                    tempEvent.end = moment(endTempDate).subtract(1, 's').toDate();
                    finalHourlyEvents.push(tempEvent);
                }                
            }
            
            beginTempDate =  moment(beginTempDate).add(1, 'd').toDate();
            endTempDate =  moment(endTempDate).add(1, 'd').toDate();
            if(beginTempDate.valueOf() > maxHourlyDate.valueOf()){
                break;
            }
        }
    }

    const event_hourly = ({event}: any) => {
        var dateParameter = event.start;
        dateParameter = dateParameter.getFullYear()+"."+dateParameter.getMonth()+"."+dateParameter.getDate();
        return (
            <div>
                {event.name}<br/>
                <div>
                    {event.description}
                </div>
            </div>
        );
    };

    return (
        <div className="absolute lg:relative top-0 left-0 w-screen h-screen bg-[#f7f7f7] z-10 lg:z-auto  pt-0 lg:pt-10">
            <div className="lg:hidden flex bg-primary h-[6.5rem] text-white">
                <div className="my-auto relative">
                    <button className="absolute inline ml-5 -mt-3" onClick={goBack} style={{zIndex: 2}}>
                        <svg className="inline" width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.25125 17.5L11.2487 15.5025L4.76041 9L11.2487 2.4975L9.25125 0.499996L0.751249 9L9.25125 17.5Z" fill="white"/>
                        </svg>
                    </button>
                    <div className="inline w-screen absolute left-0 text-center -mt-4" style={{zIndex: 1}}>
                        <span id="testId" className="text-2xl font-light text-center pt-20">
                            Veranstaltungskalender
                        </span>
                    </div>
                </div>
            </div>
            <div className="hidden lg:flex items-center justify-center  mx-6 text-3xl font-semibold">
                <div className="bg-white w-full mx-20 p-2 rounded-md">
                    Kalender
                </div>
            </div>
            <div className="flex items-center justify-center mt-0 lg:mt-5">
                <Calendar
                    className="max-w-2xl w-full mx-auto customized-monthly-calendar bg-white pb-10"
                    localizer={localizer}
                    events={finalDatesEvents}
                    components={{event: event_dates}}
                    view={'month'}
                    views={{month: true}}
                    startAccessor="start"
                    endAccessor="end"
                    style={{maxHeight: 520}}
                    dayLayoutAlgorithm={'no-overlap'}
                />

                {/* hidden lg:inline */}
                <Calendar
                    className="max-w-2xl min-w-[300px] mx-auto overflow-y-scroll hidden lg:inline "
                    localizer={localizer}
                    events={finalHourlyEvents}
                    components={{event: event_hourly}}
                    view={'day'}
                    views={{day: true}}
                    startAccessor="start"
                    endAccessor="end"
                    style={{maxHeight: 500, backgroundColor: "white"}}
                    dayLayoutAlgorithm={'no-overlap'}
                    // scrollToTime={minHourToScrollForToday}
                />
            </div>
        </div>
    );
};

export default EventsCalendar;
