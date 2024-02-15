import React from "react";
import { IoSendSharp } from "react-icons/io5";
import styles from "./FolderInputContainer.module.css";

function FolderInputContainer({
  onFolderInputChange,
  onCreateNewFolderClick,
  newFolderName,
}) {
  return (
    <div className={styles.folderInputContainer}>
      <input
        onChange={onFolderInputChange}
        value={newFolderName}
        type="text"
        placeholder="Create new folder..........."
      />
      <button onClick={onCreateNewFolderClick}>
        <IoSendSharp />
      </button>
    </div>
  );
}

export default FolderInputContainer;
