import React from "react";
import styles from "./styles.module.scss";
import Input from "../input";
import UpdateBtn from "../update-btn";

const Title = ({ onClick, onChange, value }) => {
  return (
    <section className={styles["table__header"]}>
      <h1>Users</h1>
      <Input value={value} onChange={onChange} />
      <UpdateBtn onClick={onClick} />
    </section>
  );
};

export default Title;
