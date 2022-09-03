import classes from "./RadioInput.module.css";

const RadioInput = ({ color, selectedColor, selectColorHandler }) => {
  return (
    <label
      className={classes["radio-label"]}
      style={{ backgroundColor: color }}
    >
      <input
        type="radio"
        value={color}
        checked={selectedColor === color}
        onChange={selectColorHandler}
      />
      {selectedColor === color && <span className={classes.checked}></span>}
    </label>
  );
};

export default RadioInput;
