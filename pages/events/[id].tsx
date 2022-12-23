import React from "react";
import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";

const SingleEvent = () => {
  const router = useRouter();
  const event = getEventById(router.query.id);
  if (!event) {
    return <p>no event</p>;
  }
  return (
    <React.Fragment>
      <EventSummary title={event.title} />
      <EventLogistics address={event.location} date={event.date} image={event.image} imageAlt={event.title} />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </React.Fragment>
  );
};

export default SingleEvent;
