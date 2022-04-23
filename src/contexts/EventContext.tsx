import { createContext, useState, useEffect } from "react";
import { EventEntity, useGetEventsQuery } from "../GraphQl/graphql";

export const EventContext = createContext<any>(null);

export const EventPovider: React.FunctionComponent = ({ children }) => {
  const [allEvents, setAllEvents] = useState<any>();

  const result = useGetEventsQuery({
    variables: {
      params: {
        //FilterSortPaginate fields
      },
    },
  });

  useEffect(() => {
    setAllEvents(result.data?.getEvents?.result);
  }, [result.data?.getEvents?.result]);

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
