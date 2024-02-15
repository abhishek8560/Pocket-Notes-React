import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import styles from "./NoNotesListMessage.module.css";

function NoNotesListMessage() {
  return (
    <div className={styles.noListContainer}>
      <div className={styles.icon}>
        <FaTrashAlt />
      </div>
      <p>Empty Note List</p>
      <p>Please Enter Some Notes</p>
    </div>
  );
}

export default NoNotesListMessage;
