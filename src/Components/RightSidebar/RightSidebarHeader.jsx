import React from "react";
import styles from "./RightSidebarHeader.module.css";
import { HiFolderPlus } from "react-icons/hi2";

function RightSidebarHeader({ folderNameForHeader }) {
  return (
    <div className={styles.rightSidebarHeaderContainer}>
      <button className={styles.folderName}>
        <p className={styles.shortForm}>
          <HiFolderPlus />
        </p>
        {folderNameForHeader}
      </button>
    </div>
  );
}

export default RightSidebarHeader;
