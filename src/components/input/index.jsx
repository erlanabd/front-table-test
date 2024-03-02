import React from "react";
import styles from "./styles.module.scss";

const Input = ({ value, onChange }) => {
  const inputKeyPressHandler = (event) => {
    if (event.key === " ") {
      event.preventDefault();
    }
  };

  return (
    <div className={styles["box"]}>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={styles["input"]}
        onKeyDown={inputKeyPressHandler}
        type="text"
        placeholder="Search..."
      />
      <i className={styles["icon"]}></i>
    </div>
  );
};

export default Input;
