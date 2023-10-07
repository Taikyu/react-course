import React from "react";

import AddUserForm from "./components/AddUserForm";
import UserList from "./components/result/UserList";
import Card from "./components/UI/Card";

function App() {
  let users = [];

  const submitUserHandler = (user) => {
    const newUser = {
      id: Math.random(),
      ...user,
    };
    users.push(newUser);

    console.log(users);
  };

  return (
    <div>
      <Card>
        <AddUserForm onSubmitUser={submitUserHandler} />
      </Card>
      <Card>
        <UserList users={users} />
      </Card>
    </div>
  );
}

export default App;
