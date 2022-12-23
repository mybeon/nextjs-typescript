import React from "react";
import EventList from "../components/events/EventList";
import { getFeaturedEvents } from "../dummy-data";

const index = () => {
  const featuredEvent = getFeaturedEvents();
  return (
    <React.Fragment>
      <EventList items={featuredEvent} />
    </React.Fragment>
  );
};

export default index;
