import Image from "next/image";
import AddressIcon from "../events/icons/address-icon";
import DateIcon from "../events/icons/date-icon";
import LogisticsItem from "./logistics-item";
import classes from "./event-logistics.module.css";

type Props = {
  date: string;
  address: string;
  image: string;
  imageAlt: string;
};

function EventLogistics(props: Props) {
  const { date, address, image, imageAlt } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const addressText = address.replace(", ", "\n");

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <Image src={`/${image}`} alt={imageAlt} height={600} width={600} />
      </div>
      <ul className={classes.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default EventLogistics;
