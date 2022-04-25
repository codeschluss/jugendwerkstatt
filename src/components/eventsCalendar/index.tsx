import React, { Children, useState } from "react";
import ReactDOM from "react-dom";
import Calendar from 'react-calendar';
import './eventsCalendarStyle.css';



const EventsCalendar: React.FC = () => {
    const [value, onChange] = useState(new Date());

    return (
        <div className="absolute top-0 left-0 w-screen h-screen bg-white z-10">
            <div className="flex bg-primary h-[6.5rem] text-white">
                <div className="my-auto relative">
                    <div className="inline ml-5">
                        <svg className="inline" width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.25125 17.5L11.2487 15.5025L4.76041 9L11.2487 2.4975L9.25125 0.499996L0.751249 9L9.25125 17.5Z" fill="white"/>
                        </svg>
                    </div>
                    <div className="inline w-screen absolute left-0 text-center -mt-2">
                        <span className="text-3xl font-light text-center">
                            18. Februar 2022
                        </span>
                    </div>
                </div>
            </div>
            <Calendar  className="mx-auto border-none" onChange={onChange} value={value} />
        </div>
    );
};

export default EventsCalendar;


const TodoComponent = {
    backgroundColor: "red",
}
