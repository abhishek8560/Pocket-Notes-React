import react from "react";
import styles from "./FolderContainer.module.css";
import NoFolderMessage from "./NoFolderMessage";
import { HiFolderPlus } from "react-icons/hi2";

function FolderContainer({ notesArray, onFolderButtonClick }) {
  return (
    <div className={styles.folderContainer}>
      {notesArray.length === 0 ? (
        <NoFolderMessage />
      ) : (
        notesArray.map((item, index) => (
          <button
            onClick={() => onFolderButtonClick(index)}
            key={index}
            className={styles.folderName}
          >
            <p
              className={styles.shortForm}
              style={{ backgroundColor: notesArray[index].shortFormColor }}
            >
              <HiFolderPlus />
            </p>
            {item.folderName}
          </button>
        ))
      )}
    </div>
  );
}

export default FolderContainer;
