import React, { useEffect, useState } from "react";
import BoxLayout from "../box-layout";
import Title from "../title";
import Table from "../table";

import styles from "./styles.module.scss";

function App() {
  const [users, setUsers] = useState(null);
  const [global, setGlobal] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [selectedSort, setSelectedSort] = useState("");

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

  useEffect(() => {
    (async () => {
      const users = await getUsers();
      setUsers(users);
    })();
  }, []);

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

  const sortUsers = (sort) => {
    setSelectedSort(sort);
    if (sort === "name") {
      setUsers([...users].sort((a, b) => a.name.localeCompare(b.name)));
    } else if (sort === "email") {
      setUsers([...users].sort((a, b) => a.email.localeCompare(b.email)));
    }
  };

  const inputHandler = (value) => {
    const trimmedValue = value.trim();
    setInputValue(trimmedValue.toLowerCase());
  };

  return (
    <div className={styles["app"]}>
      <BoxLayout>
        <Title
          selectValue={selectedSort}
          onChangeSelect={sortUsers}
          value={inputValue}
          onChangeInput={inputHandler}
          onClick={getUsers}
        />
        <Table global={global} users={filteredUsers} />
      </BoxLayout>
    </div>
  );
}

export default App;
