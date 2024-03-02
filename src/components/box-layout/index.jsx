import React from "react";
import styles from "./styles.module.scss";

const BoxLayout = ({ children }) => {
  return <main className={styles["table"]}>{children}</main>;
};

export default BoxLayout;
