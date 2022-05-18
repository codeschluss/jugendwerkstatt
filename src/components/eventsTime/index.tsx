import React, { Component, Children, useEffect, useState } from "react";
import { EventEntity, useGetEventsQuery } from "../../GraphQl/graphql";

import { useNavigate } from "react-router-dom";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

const EventsTime: React.FC = () => {
    // const todayDate = new Date();
    // const formatter = new Intl.DateTimeFormat('de', { month: 'long' });
    // const monthName = formatter.format(currentDate);
    // const currentDateString = `${currentDate.getDate()}. ${monthName} ${currentDate.getFullYear()}`;

    const navigate = useNavigate();
    function goBack() {
        navigate(-1);
    } 

    const currentListStringDate = window.location.href.split("?date=")[1].split(".");
    const currentDate = new Date(parseInt(currentListStringDate[0]), (parseInt(currentListStringDate[1])-1), parseInt(currentListStringDate[2]));

    const localizer = momentLocalizer(moment);

    const [eventsData, setEventsData] = useState<EventEntity | any>();
    const result = useGetEventsQuery();
    useEffect(() => {
        if (result.data) {
            setEventsData(result?.data?.getEvents?.result);
        }
    }, [result.data]);

    var eventsInfo: any = [];
    var temmmpCounter = 0;
    {eventsData?.map((singleEvent: EventEntity) => {
        var tempSchedules = singleEvent?.schedules as any;

        for (let i = 0; i < tempSchedules?.length; i++) {
            eventsInfo[temmmpCounter] = {
                id : temmmpCounter,
                eventId : singleEvent.id,
                name: singleEvent.name,
                description: singleEvent.description,
                start : new Date(tempSchedules[i]?.startDate),
                end : new Date(tempSchedules[i]?.endDate),
                allDay: false
            }
            temmmpCounter = temmmpCounter+1;
        }
    })};

    // const eventsInfo = [
    //     {
    //         id: 0,
    //         name: "First Event",
    //         allDay: false,
    //         start: new Date(2022,4,10,10),
    //         end: new Date(2022,4,10,13)
    //     },
    //     {
    //         id: 1,
    //         name: "Second Event",
    //         allDay: false,
    //         start: new Date(2022,4,10,11),
    //         end: new Date(2022,4,10,14)
    //     },
    //     {
    //         id: 2,
    //         name: "Third Event",
    //         allDay: false,
    //         start: new Date(2022,4,10,11),
    //         end: new Date(2022,4,10,14)
    //     },
    //     {
    //         id: 3,
    //         name: "Fourth Event",
    //         allDay: false,
    //         start: new Date(2022,4,9,11),
    //         end: new Date(2022,4,10,14)
    //     }
    // ];
      
    var endTempDate =  moment(currentDate).add(1, 'd').toDate();
    var tempEventsInfo = []
    for (let i = 0; i < eventsInfo?.length; i++) {
        if(eventsInfo[i].start>=currentDate && eventsInfo[i].end<=endTempDate){
            if(eventsInfo[i].end.getTime()===endTempDate.getTime()){
                var tempEvent = eventsInfo[i];
                tempEvent.end = moment(endTempDate).subtract(1, 's').toDate();
                tempEventsInfo.push(tempEvent);
            }
            else{
                tempEventsInfo.push(eventsInfo[i]);
            }
        }
        else if(eventsInfo[i].start<currentDate && eventsInfo[i].end>currentDate && eventsInfo[i].end<=endTempDate){
            var tempEvent = eventsInfo[i];
            tempEvent.start = currentDate;
            tempEventsInfo.push(tempEvent);
        }
        else if(eventsInfo[i].start<endTempDate && eventsInfo[i].start>=currentDate && eventsInfo[i].end>=endTempDate){
            var tempEvent = eventsInfo[i];
            tempEvent.end = moment(endTempDate).subtract(1, 's').toDate();
            tempEventsInfo.push(tempEvent);
        }
        else if(eventsInfo[i].start<currentDate && eventsInfo[i].end>endTempDate){
            var tempEvent = eventsInfo[i];
            tempEvent.start = currentDate;
            tempEvent.end = moment(endTempDate).subtract(1, 's').toDate();
            tempEventsInfo.push(tempEvent);
        }
    }

    var minDate = currentDate;
    if(tempEventsInfo.length>0){
        minDate = tempEventsInfo[0].start;
        if(tempEventsInfo.length>1){
            for (let i = 1; i < tempEventsInfo?.length; i++) {
                if(tempEventsInfo[i].start<minDate){
                    minDate = tempEventsInfo[i].start;
                }
            }
        }
    }

    const event = ({event}: any) => {
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
        <div className="absolute top-0 left-0 w-screen h-screen bg-white z-10">
            <div className="flex bg-primary h-[6.5rem] text-white">
                <div className="my-auto relative" style={{zIndex: 0}}>
                    <button className="absolute inline ml-5 -mt-3" onClick={goBack} style={{zIndex: 2}}>
                        <svg className="inline" width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.25125 17.5L11.2487 15.5025L4.76041 9L11.2487 2.4975L9.25125 0.499996L0.751249 9L9.25125 17.5Z" fill="white"/>
                        </svg>
                    </button>
                    <div className="inline w-screen absolute left-0 text-center -mt-4" style={{zIndex: 1}}>
                        <span className="text-2xl font-light text-center pt-20"> 
                            Zeit der Ereignisse
                        </span>
                    </div>
                </div>
                
            </div>
            <Calendar
                className="max-w-2xl mx-auto customized-day-calendar"
                localizer={localizer}
                date = {currentDate}
                events={tempEventsInfo}
                components={{event: event}}
                view={'day'}
                views={{day: true}}
                startAccessor="start"
                endAccessor="end"
                style={{maxHeight: 450}}
                dayLayoutAlgorithm={'no-overlap'}
                scrollToTime={minDate}
            />
        </div>
    );
};

export default EventsTime;

