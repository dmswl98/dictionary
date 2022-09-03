import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Modal from "../UI/Modal";
import RadioInput from "../UI/RadioInput";

import { bookActions } from "../../store/book-slice";

import Close from "../../assets/images/svg-close";
import classes from "./FolderModal.module.css";

const colorList = ["#FF595E", "#FFCA3A", "#8AC926", "#1982C4", "#6A4C93"];

const FolderModal = (props) => {
  const dispatch = useDispatch();
  const folders = useSelector((state) => state.book.folders);
  const folderNameRef = useRef();
  const [selectedColor, setSelectedColor] = useState("#FF595E");
  const [NoDataError, setNoDataError] = useState(false);
  const [duplicateError, setDuplicateError] = useState(false);

  const selectColorHandler = (e) => {
    setSelectedColor(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredListName = folderNameRef.current.value;

    if (
      enteredListName.trim().length === 0 ||
      selectedColor.trim().length === 0
    ) {
      setNoDataError(true);
      return;
    }

    for (const folder of folders) {
      if (folder.name === enteredListName) {
        folderNameRef.current.value = "";
        setDuplicateError(true);
        return;
      }
    }

    dispatch(
      bookActions.createFolder({
        name: enteredListName.trim(),
        color: selectedColor.trim(),
      })
    );

    props.onClose();
  };

  return (
    <Modal onClose={props.onClose}>
      <div>
        <header className={classes.header}>
          <h3 className={classes.title}>Create a new folder</h3>
          <button onClick={props.onClose}>
            <Close className={classes.svg} />
          </button>
        </header>
        <main>
          <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes["name-input"]}>
              <label className={classes.label}>Folder name</label>
              <input type="text" ref={folderNameRef} />
              {duplicateError && (
                <p className={classes.error}>Please change the folder name.</p>
              )}
              {NoDataError && (
                <p className={classes.error}>Please enter folder name.</p>
              )}
            </div>
            <div className={classes["color-input"]}>
              <label className={classes.label}>Pick a color of folder</label>
              <div className={classes["radio-group"]}>
                {colorList.map((color) => (
                  <RadioInput
                    key={color}
                    color={color}
                    selectedColor={selectedColor}
                    selectColorHandler={selectColorHandler}
                  />
                ))}
              </div>
            </div>
            <button className={classes.submit}>Create folder</button>
          </form>
        </main>
      </div>
    </Modal>
  );
};

export default FolderModal;
