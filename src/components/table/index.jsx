import React from "react";
import styles from "./styles.module.scss";
import Loading from "../loading";

const Table = ({ global, users }) => {
  if (global) {
    return <Loading />;
  }

  return (
    <section className={styles["table__body"]}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>e-mail</th>
            <th>phone</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      {users.length === 0 && (
        <div className={styles["empty-list"]}>Такого пользователя нет</div>
      )}
    </section>
  );
};

export default Table;
