import React from "react";
import EventItem from "./EventItem";
import styles from "./event-list.module.css";
import { Event } from "../../types/events";

type Props = {
  items: Event[];
};

const EventList = ({ items }: Props) => {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <EventItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default EventList;
