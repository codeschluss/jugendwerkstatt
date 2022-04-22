import { createContext, useState } from "react";

export const EventContext = createContext<any>(null);

export const EventPovider: React.FunctionComponent = ({ children }) => {
  const [allEvents, setAllEvents] = useState<string>();

  return (
    <EventContext.Provider
      value={{
        allEvents,
        setAllEvents,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

export default EventContext;
