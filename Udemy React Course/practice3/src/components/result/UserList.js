import React from "react";

import UserDisplay from "./UserDisplay";

const UserList = ({ users }) => {
  return (
    <div className="flex flex-col gap-2">
      {users.map((user) => (
        <UserDisplay key={user.id} name={user.name} age={user.age} />
      ))}
    </div>
  );
};

export default UserList;
