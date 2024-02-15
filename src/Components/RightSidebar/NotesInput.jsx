import React from "react";
import styles from "./NotesInput.module.css";
import { IoSendSharp } from "react-icons/io5";

function NotesInput({
  onNotesInputChange,
  onNewNotesButtonClick,
  newNotesInput,
}) {
  return (
    <div className={styles.notesInputContainer}>
      <textarea
        onChange={onNotesInputChange}
        className={styles.textArea}
        value={newNotesInput}
        name=""
        id=""
        cols="900"
        rows="10"
        placeholder="Enter note text here..........."
      ></textarea>
      <button onClick={onNewNotesButtonClick} className={styles.sendButton}>
        <IoSendSharp />
      </button>
    </div>
  );
}

export default NotesInput;
