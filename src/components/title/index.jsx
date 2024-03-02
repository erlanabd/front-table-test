import React from "react";
import styles from "./styles.module.scss";
import Input from "../input";
import UpdateBtn from "../update-btn";

const Title = ({
  onClick,
  onChangeInput,
  value,
  selectValue,
  onChangeSelect,
}) => {
  return (
    <section className={styles["table__header"]}>
      <h1>Users</h1>
      <select
        value={selectValue}
        onChange={(e) => onChangeSelect(e.target.value)}
      >
        <option value="" disabled>
          Фильтр
        </option>
        <option value="">name</option>
        <option value="">e-mail</option>
      </select>
      <Input value={value} onChange={onChangeInput} />
      <UpdateBtn onClick={onClick} />
    </section>
  );
};

export default Title;
