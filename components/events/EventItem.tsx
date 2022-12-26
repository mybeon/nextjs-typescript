import React from "react";
import Image from "next/image";
import styles from "./event-item.module.css";
import { Event } from "../../types/events";
import Button from "../UI/Button";
import AddressIcon from "./icons/address-icon";
import ArrowIcon from "./icons/arrow-right-icon";
import DateIcon from "./icons/date-icon";

type Props = {
  item: Event;
};

const EventItem = ({ item }: Props) => {
  const time = new Date(item.date).toLocaleDateString("en-Us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const address = item.location.replace(", ", "\n");
  return (
    <li className={styles.item}>
      <Image src={"/" + item.image} alt={item.title} width={350} height={350} />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{item.title}</h2>
          <div className={styles.date}>
            <DateIcon />
            <time>{time}</time>
          </div>
          <div className={styles.address}>
            <AddressIcon />
            <address>{address} </address>
          </div>
        </div>
        <div className={styles.actions}>
          <Button link={`events/${item.id}`}>
            <span>go to event</span>
            <span className={styles.icon}>
              <ArrowIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
