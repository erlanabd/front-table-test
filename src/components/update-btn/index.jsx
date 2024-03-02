import React from "react";
import styles from "./styles.module.scss";

const UpdateBtn = ({ onClick }) => {
  return (
    <button onClick={onClick} className={styles["update-btn"]}>
      UPDATE
    </button>
  );
};

export default UpdateBtn;
