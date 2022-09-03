import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import Modal from "../UI/Modal";

import { bookActions } from "../../store/book-slice";

import Close from "../../assets/images/svg-close";
import classes from "./SaveModal.module.css";

const SaveModal = (props) => {
  const dispatch = useDispatch();
  const { word } = useParams();
  const [selectedFolder, setSelectedFolder] = useState("");

  const selectedFolderHandler = (e) => {
    setSelectedFolder(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (selectedFolder.trim().length === 0) return;

    dispatch(
      bookActions.addWordToFolder({
        name: selectedFolder,
        word,
      })
    );
    props.onClose();
  };

  return (
    <Modal onClose={props.onClose}>
      <div>
        <header className={classes.header}>
          <h3 className={classes.title}>Select the folder</h3>
          <button onClick={props.onClose}>
            <Close className={classes.svg} />
          </button>
        </header>
        <main>
          {props.folders.length === 0 && <p>No folders have been created.</p>}
          {props.folders.length !== 0 && (
            <form onSubmit={submitHandler}>
              <div className={classes["folder-list"]}>
                {props.folders.map((folder) => (
                  <div
                    key={folder.id}
                    className={
                      selectedFolder === folder.name
                        ? `${classes["folder-item"]} ${classes.active}`
                        : `${classes["folder-item"]} ${classes.hover}`
                    }
                  >
                    <label className={classes["radio-label"]}>
                      📁 {folder.name}
                    </label>
                    <input
                      className={classes["radio-input"]}
                      type="radio"
                      value={folder.name}
                      checked={selectedFolder === folder.name}
                      onChange={selectedFolderHandler}
                    />
                  </div>
                ))}
              </div>

              <button className={classes.submit}>submit</button>
            </form>
          )}
        </main>
      </div>
    </Modal>
  );
};

export default SaveModal;
