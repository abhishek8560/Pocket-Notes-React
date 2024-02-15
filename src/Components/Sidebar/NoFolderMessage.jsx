import React from "react";
import { FaFolderOpen } from "react-icons/fa";
import styles from "./NoFolderMessage.module.css";

function NoFolderMessage() {
  return (
    <div className={styles.noFolderMessageContainer}>
      <div className={styles.icon}>
        <FaFolderOpen />
      </div>
      <p>No Folders</p>
    </div>
  );
}

export default NoFolderMessage;
