import React from "react";
import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/events/ResultsTitle";
import SEO from "../../components/SEO";

const FilteredEvents = () => {
  const router = useRouter();
  const slug = router.query.slug;

  if (typeof slug == "undefined") {
    return <p>loading....</p>;
  }
  const year = +slug[0];
  const month = +slug[1];

  if (isNaN(year) || isNaN(month) || year < 2021 || year > 2030 || month < 1 || month > 12 || slug.length > 2) {
    return <p>invalid params</p>;
  }

  const events = getFilteredEvents({ year, month });

  if (!events || events.length === 0) {
    return <p>No events for this query</p>;
  }

  const date = new Date(year, month - 1);

  return (
    <React.Fragment>
      <SEO title="search" />
      <ResultsTitle date={date} />
      <EventList items={events} />;
    </React.Fragment>
  );
};

export default FilteredEvents;
