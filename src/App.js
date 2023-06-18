import React, { useState} from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [userList, setUserList] = useState([]);
  
  const addUserHandler = (uName, uAge, cName) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { name: uName, age: uAge, id: Math.random().toString(), collageName: cName },
      ];
    });
  };
  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={userList} />
    </>
  );
}

export default App;
