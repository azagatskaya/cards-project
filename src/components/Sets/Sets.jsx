import React from "react";
import styles from "./Sets.css";
import CardSetButton from "../CardSetButton/CardSetButton.jsx";
import EnhancedTable from "../EnhancedTable/EnhancedTable.jsx";
import Card from "../Card/Card.jsx";
import words from "../../words.json";

function handleSetButtonClick(e) {
  console.log(e.target);
  <Card item={words[0]}></Card>;
}

function Sets(props) {
  return (
    <div className={styles.sets__wrapper}>
      <div className={styles.sets__buttons}>
        {words.map((el) => (
          <CardSetButton
            cardSet={el}
            onClick={handleSetButtonClick}
          ></CardSetButton>
        ))}
      </div>
      {/* <CustomizedTables></CustomizedTables> */}
      <EnhancedTable></EnhancedTable>
    </div>
  );
}

export default Sets;
