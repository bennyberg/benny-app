"use client"; // prevents problem with calling function with onClick

import { useState } from "react";

import styles from "./page.module.css";

function Square() {
  const [value, setValue] = useState<string | null>(null);

  function handleClick() {
    setValue('X');
  }

  return (
    <button className={styles.square} onClick={handleClick}>
      {value}
    </button>
  );
}

export default function Board() {
  return (
    <>
      <div className={styles["board-row"]}>
        <Square />
        <Square />
        <Square />
      </div>
      <div className={styles["board-row"]}>
        <Square />
        <Square />
        <Square />
      </div>
      <div className={styles["board-row"]}>
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
