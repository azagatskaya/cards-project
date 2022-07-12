import React from "react";
import styles from "./CardSetButton.css";

function CardSetButton(props) {
  return <div className={styles.cardSetButton}>{props.cardSet.rus_name}</div>;
}

export default CardSetButton;
