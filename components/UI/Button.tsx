import Link from "next/link";
import React from "react";
import styles from "./button.module.css";

type Props = {
  children: React.ReactNode;
  link?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = (props: Props) => {
  if (props.link) {
    return (
      <Link className={styles.btn} href={props.link}>
        {props.children}
      </Link>
    );
  } else {
    return (
      <button className={styles.btn} onClick={props.onClick}>
        {props.children}
      </button>
    );
  }
};

export default Button;
