import React, { useEffect, useState } from "react";
import BoxLayout from "../box-layout";
import Title from "../title";
import Table from "../table";

import styles from "./styles.module.scss";

function App() {
  const [users, setUsers] = useState(null);
  const [global, setGlobal] = useState(true);
  const [inputValue, setInputValue] = useState("dasdas");

  const getUsers = async () => {
    setInputValue("");
    try {
      setGlobal(true);
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      return data;
    } catch (error) {
      alert("Ошибка при получении данных:", error);
    } finally {
      setGlobal(false);
    }
  };

  const inputHandler = (value) => {
    const trimmedValue = value.trim();
    setInputValue(trimmedValue.toLowerCase());
  };

  const filteredUsers =
    users &&
    users.filter((user) => {
      if (inputValue === "") {
        return user;
      } else {
        return (
          user.name.toLowerCase().includes(inputValue) ||
          user.email.toLowerCase().includes(inputValue) ||
          user.phone.toLowerCase().includes(inputValue)
        );
      }
    });

  useEffect(() => {
    (async () => {
      const users = await getUsers();
      setUsers(users);
    })();
  }, []);

  return (
    <div className={styles["app"]}>
      <BoxLayout>
        <Title value={inputValue} onChange={inputHandler} onClick={getUsers} />
        <Table global={global} users={filteredUsers} />
      </BoxLayout>
    </div>
  );
}

export default App;
