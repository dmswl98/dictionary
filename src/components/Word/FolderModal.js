import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { bookActions } from "../../store/book-slice";
import Modal from "../UI/Modal";
import Close from "../../assets/images/svg-close";
import classes from "./FolderModal.module.css";

const FolderModal = (props) => {
  const dispatch = useDispatch();
  const listNameRef = useRef();
  const [selectedColor, setSelectedColor] = useState("#FF595E");

  const selectColorHandler = (e) => {
    setSelectedColor(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredListName = listNameRef.current.value;

    if (
      enteredListName.trim().length === 0 ||
      selectedColor.trim().length === 0
    )
      return;

    console.log(enteredListName);
    console.log(selectedColor);

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
              <label className={classes.label}>List name</label>
              <input type="text" ref={listNameRef} />
            </div>
            <div className={classes["color-input"]}>
              <label className={classes.label}>Pick a color of folder</label>
              <div className={classes["radio-group"]}>
                <label className={`${classes["radio-label"]} ${classes.red}`}>
                  <input
                    type="radio"
                    value="#FF595E"
                    checked={selectedColor === "#FF595E"}
                    onChange={selectColorHandler}
                  />
                  {selectedColor === "#FF595E" && (
                    <span className={classes.checked}></span>
                  )}
                </label>
                <label
                  className={`${classes["radio-label"]} ${classes.yellow}`}
                >
                  <input
                    type="radio"
                    value="#FFCA3A"
                    checked={selectedColor === "#FFCA3A"}
                    onChange={selectColorHandler}
                  />
                  {selectedColor === "#FFCA3A" && (
                    <span className={classes.checked}></span>
                  )}
                </label>
                <label className={`${classes["radio-label"]} ${classes.green}`}>
                  <input
                    type="radio"
                    value="#8AC926"
                    checked={selectedColor === "#8AC926"}
                    onChange={selectColorHandler}
                  />
                  {selectedColor === "#8AC926" && (
                    <span className={classes.checked}></span>
                  )}
                </label>
                <label className={`${classes["radio-label"]} ${classes.blue}`}>
                  <input
                    type="radio"
                    value="#1982C4"
                    checked={selectedColor === "#1982C4"}
                    onChange={selectColorHandler}
                  />
                  {selectedColor === "#1982C4" && (
                    <span className={classes.checked}></span>
                  )}
                </label>
                <label
                  className={`${classes["radio-label"]} ${classes.purple}`}
                >
                  <input
                    type="radio"
                    value="#6A4C93"
                    checked={selectedColor === "#6A4C93"}
                    onChange={selectColorHandler}
                  />
                  {selectedColor === "#6A4C93" && (
                    <span className={classes.checked}></span>
                  )}
                </label>
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
