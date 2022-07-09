import React from "react";
import styles from "./Card.css";

function Card(props) {
  return <div className={styles.card_wrapper}>{props.item.word}</div>;
}
export default Card;
