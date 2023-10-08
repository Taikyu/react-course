import React from "react";

import UserDisplay from "./UserDisplay";
import Card from "../UI/Card";

const UserList = ({ users }) => {
  return (
    <Card>
      <div className="flex flex-col gap-2">
        {users.map((user) => (
          <UserDisplay key={user.id} name={user.name} age={user.age} />
        ))}
      </div>
    </Card>
  );
};

export default UserList;
