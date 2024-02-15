import React from "react";
import RightSidebarHeader from "./RightSidebar/RightSidebarHeader";
import NotesDisplay from "./RightSidebar/NotesDisplay";
import NotesInput from "./RightSidebar/NotesInput";
import styles from "./RightSidebar.module.css";

function RightSidebar({
  folderNotesArray,
  onNotesInputChange,
  onNewNotesButtonClick,
  newNotesInput,
  timeStamp,
  folderNameForHeader,
}) {
  return (
    <div className={styles.rightSidebarContainer}>
      <RightSidebarHeader folderNameForHeader={folderNameForHeader} />
      <NotesDisplay timeStamp={timeStamp} folderNotesArray={folderNotesArray} />
      <NotesInput
        onNotesInputChange={onNotesInputChange}
        onNewNotesButtonClick={onNewNotesButtonClick}
        newNotesInput={newNotesInput}
      />
    </div>
  );
}

export default RightSidebar;
