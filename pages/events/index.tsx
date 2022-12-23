import React from "react";
import EventList from "../../components/events/EventList";
import EventSearch from "../../components/events/EventSearch";
import { getAllEvents } from "../../dummy-data";
import { useRouter } from "next/router";

const Events = () => {
  const events = getAllEvents();
  const router = useRouter();
  function filterEvents(year: string, month: string) {
    const link = `events/${year}/${month}`;
    router.push(link);
  }
  return (
    <React.Fragment>
      <EventSearch onSearch={filterEvents} />
      <EventList items={events} />
    </React.Fragment>
  );
};

export default Events;
