import React, { useState } from "react";
import Sidebar from "./Components/Sidebar";
import styles from "./PocketNotes.module.css";
import RightSidebar from "./Components/RightSidebar";
import WelcomeMessage from "./Components/WelcomeMessage";

function PocketNotes() {
  let [notesArray, setNotesArray] = useState([]);
  let [newFolderName, setNewFolderName] = useState("");
  let [folderNotesArray, setFolderNotesArray] = useState([]);
  let [currentIndex, setCurrentIndex] = useState(0);
  let [newNotesInput, setNewNotesInput] = useState("");
  let [isFolderClicked, setIsFolderClicked] = useState(false);

  let colorArray = [
    "red",
    "purple",
    "green",
    "skyblue",
    "#FAEF5D",
    "#FF004D",
    "#7D0A0A",
    "#E78895",
    "#711DB0",
    "#FF9800",
    "#F31559",
  ];

  function onFolderInputChange(event) {
    setNewFolderName(event.target.value);
  }

  function onCreateNewFolderClick() {
    setNotesArray((prevValue) => [
      ...prevValue,
      {
        folderName: newFolderName,
        inFolderNotesArray: [],
        shortFormColor: "",
      },
    ]);
    setNewFolderName("");
  }

  let [folderNameForHeader, setFolderNameForHeader] = useState();
  function onFolderButtonClick(index) {
    setFolderNotesArray(notesArray[index].inFolderNotesArray);
    setCurrentIndex(index);
    setIsFolderClicked(true);
    setFolderNameForHeader(notesArray[index].folderName);
  }

  function onNotesInputChange(event) {
    setNewNotesInput(event.target.value);
  }

  function generateRandomColor(colorArray) {
    let randomNumb = Math.floor(Math.random() * 11);
    let randomColor = colorArray[randomNumb];
    return randomColor;
  }

  function onNewNotesButtonClick() {
    let notesArrayCopy = [...notesArray];
    let selectedNotesArray = notesArrayCopy[currentIndex].inFolderNotesArray;
    let updatedNotesArray = [...selectedNotesArray, newNotesInput];
    let selectedFolderName = notesArrayCopy[currentIndex].folderName;

    let randomColor = generateRandomColor(colorArray);

    let updatedNotesObject = {
      folderName: selectedFolderName,
      inFolderNotesArray: updatedNotesArray,
      shortFormColor: randomColor,
    };
    notesArrayCopy[currentIndex] = updatedNotesObject;
    let newNotesArray = [...notesArrayCopy];
    setNotesArray([...newNotesArray]);
    setNewNotesInput("");
  }
  return (
    <div className={styles.pocketNotesAppContainer}>
      <Sidebar
        notesArray={notesArray}
        onFolderButtonClick={onFolderButtonClick}
        onFolderInputChange={onFolderInputChange}
        onCreateNewFolderClick={onCreateNewFolderClick}
        newFolderName={newFolderName}
      />
      {isFolderClicked ? (
        <RightSidebar
          folderNotesArray={folderNotesArray}
          onNotesInputChange={onNotesInputChange}
          onNewNotesButtonClick={onNewNotesButtonClick}
          newNotesInput={newNotesInput}
          folderNameForHeader={folderNameForHeader}
        />
      ) : (
        <WelcomeMessage />
      )}
    </div>
  );
}

export default PocketNotes;
