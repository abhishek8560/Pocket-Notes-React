import React from "react";
import SidebarHeader from "./Sidebar/SidebarHeader";
import FolderContainer from "./Sidebar/FolderContainer";
import FolderInputContainer from "./Sidebar/FolderInputContainer";
import styles from "./Sidebar.module.css";

function Sidebar({
  notesArray,
  onFolderButtonClick,
  onFolderInputChange,
  onCreateNewFolderClick,
  newFolderName,
}) {
  return (
    <div className={styles.sidebarContainer}>
      <SidebarHeader />
      <FolderContainer
        notesArray={notesArray}
        onFolderButtonClick={onFolderButtonClick}
      />
      <FolderInputContainer
        onFolderInputChange={onFolderInputChange}
        onCreateNewFolderClick={onCreateNewFolderClick}
        newFolderName={newFolderName}
      />
    </div>
  );
}

export default Sidebar;
