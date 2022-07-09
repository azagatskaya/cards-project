import React from "react";
import styles from "./Card.css";

function Card(props) {
  return <div>{props.item.word}</div>;
}
export default Card;
