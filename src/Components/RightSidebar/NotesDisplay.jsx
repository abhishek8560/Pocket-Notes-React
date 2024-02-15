import React from "react";
import styles from "./NotesDisplay.module.css";
import NoNotesListMessage from "./NoNotesListMessage";

function NotesDisplay({ folderNotesArray, timeStamp }) {
  return (
    <div className={styles.notesDisplay}>
      {folderNotesArray.length === 0 ? (
        <NoNotesListMessage />
      ) : (
        folderNotesArray.map((item, index) => (
          <div key={index} className={styles.noteItem}>
            <p>{item}</p>
            <p className={styles.timeStamp}>{timeStamp}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default NotesDisplay;
