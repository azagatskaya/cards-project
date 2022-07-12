import React from "react";
import styles from "./Card.css";

function Card(props) {
  return (
    <div className={styles.card_wrapper}>
      {/* <div>{title}</div> */}
      <div className={styles.word_transcr_wrapper}>
        <div className={styles.word}>{props.item.word}</div>
        <div className={styles.transcription}>{props.item.transcription}</div>
      </div>
      <div className={styles.button}></div>
    </div>
  );
}
export default Card;
