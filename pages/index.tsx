import { GetStaticProps } from "next";
import React from "react";
import EventList from "../components/events/EventList";
import SEO from "../components/SEO";
import { Event } from "../types/events";

type Props = {
  featuredEvents: Event[];
};

const index = (props: Props) => {
  return (
    <React.Fragment>
      <SEO />
      <EventList items={props.featuredEvents} />
    </React.Fragment>
  );
};

export const getStaticProps: GetStaticProps<{ featuredEvents: Event[] }> = async () => {
  const response = await fetch("http://localhost:3333/events?isFeatured=true");
  const data: Event[] = await response.json();
  return {
    props: {
      featuredEvents: data,
    },
  };
};

export default index;
