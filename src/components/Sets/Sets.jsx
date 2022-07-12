import React from "react";
import styles from "./Sets.css";
import CardSetButton from "../CardSetButton/CardSetButton.jsx";
import CustomizedTables from "../SetsTable/SetsTable.jsx";
import EnhancedTable from "../SetsTable/EnhancedTable.jsx";
// import Card from "../Card/Card.jsx";
import words from "../../words.json";

function Sets(props) {
  return (
    <div className={styles.sets__wrapper}>
      <div className={styles.sets__buttons}>
        {words.map((el) => (
          <CardSetButton cardSet={el}></CardSetButton>
        ))}
      </div>
      {/* <CustomizedTables></CustomizedTables> */}
      <EnhancedTable></EnhancedTable>
      {/* {<Card item={words[0]}></Card>} */}
    </div>
  );
}

export default Sets;
