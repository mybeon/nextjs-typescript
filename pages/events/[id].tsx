import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import { Event } from "../../types/events";
import SEO from "../../components/SEO";

type Props = {
  event: Event;
};

const SingleEvent = ({ event }: Props) => {
  return (
    <React.Fragment>
      <SEO title={event.title} description={event.description} />
      <EventSummary title={event.title} />
      <EventLogistics address={event.location} date={event.date} image={event.image} imageAlt={event.title} />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </React.Fragment>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch("http://localhost:3333/events");
  const data: Event[] = await response.json();
  const params = data.map((item) => ({ params: { id: item.id } }));
  return {
    paths: params,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<{ event: Event }> = async (context) => {
  const id = context.params?.id;
  const response = await fetch("http://localhost:3333/events/" + id);
  const data: Event = await response.json();
  if (Object.keys(data).length !== 0) {
    return {
      props: {
        event: data,
      },
    };
  } else {
    return {
      notFound: true,
    };
  }
};

export default SingleEvent;
