import { GetStaticProps } from "next";
import React from "react";
import EventList from "../../components/events/EventList";
import EventSearch from "../../components/events/EventSearch";
import { useRouter } from "next/router";
import { Event } from "../../types/events";
import SEO from "../../components/SEO";

type Props = {
  allEvents: Event[];
};

const Events = (props: Props) => {
  const router = useRouter();
  function filterEvents(year: string, month: string) {
    const link = `events/${year}/${month}`;
    router.push(link);
  }
  return (
    <React.Fragment>
      <SEO title="All events" />
      <EventSearch onSearch={filterEvents} />
      <EventList items={props.allEvents} />
    </React.Fragment>
  );
};

export const getStaticProps: GetStaticProps<{ allEvents: Event[] }> = async () => {
  const response = await fetch("http://localhost:3333/events");
  const data: Event[] = await response.json();
  return {
    props: {
      allEvents: data,
    },
  };
};

export default Events;
