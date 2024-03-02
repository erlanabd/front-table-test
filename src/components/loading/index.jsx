import React from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";

const Loading = () => {
  return (
    <div className={styles["box"]}>
      <div
        className={clsx(styles["dot-pulse"], styles["dot-pulse_non-active"])}
      ></div>
    </div>
  );
};

export default Loading;
