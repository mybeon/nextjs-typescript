import React, { SelectHTMLAttributes, useRef } from "react";
import Button from "../UI/Button";
import styles from "./event-search.module.css";

type Props = {
  onSearch: (year: string, month: string) => void;
};

const EventSearch = (props: Props) => {
  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const yearRef = useRef<HTMLSelectElement>(null);
  const monthRef = useRef<HTMLSelectElement>(null);
  function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const selectedYear = yearRef.current!.value;
    const selectedMonth = monthRef.current!.value;
    props.onSearch(selectedYear, selectedMonth);
  }
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles.controls}>
        <div className={styles.control}>
          <label htmlFor="year">year</label>
          <select ref={yearRef} name="year" id="year">
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={styles.control}>
          <label htmlFor="month">month</label>
          <select ref={monthRef} name="month" id="month">
            {month.map((e, idx) => (
              <option key={e} value={idx + 1}>
                {e}
              </option>
            ))}
          </select>
        </div>
      </div>
      <Button>Find events</Button>
    </form>
  );
};

export default EventSearch;
