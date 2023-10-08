import React, { useState } from "react";

import AddUserForm from "./components/AddUserForm";
import UserList from "./components/result/UserList";

function App() {
  const [userList, setUserList] = useState([]);

  const submitUserHandler = (user) => {
    const newUser = {
      id: Math.random(),
      ...user,
    };
    setUserList((prevList) => {
      return [newUser, ...prevList];
    });
  };

  return (
    <div>
      <AddUserForm onSubmitUser={submitUserHandler} />
      {userList.length > 0 && <UserList users={userList} />}
    </div>
  );
}

export default App;
