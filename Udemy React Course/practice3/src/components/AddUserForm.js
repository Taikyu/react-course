import React, { useState } from "react";

const AddUserForm = (props) => {
  const blankUser = {
    name: "",
    age: "",
  };
  const [userInput, setUserInput] = useState(blankUser);

  const changeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: value,
      };
    });
  };

  const addUserHandler = (e) => {
    e.preventDefault();
    props.onSubmitUser(userInput);

    setUserInput(blankUser);
  };

  return (
    <form onSubmit={addUserHandler} className=" flex flex-col gap-2">
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="font-bold">
          Username
        </label>
        <input
          value={userInput.name}
          type="text"
          id="name"
          onChange={(event) => changeHandler("name", event.target.value)}
          className="border p-1 px-2 border-gray-500 "
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="age" className="font-bold">
          Age (Years)
        </label>
        <input
          value={userInput.age}
          type="number"
          id="age"
          step={1}
          onChange={(event) => changeHandler("age", event.target.value)}
          className="border p-1 px-2 border-gray-500 "
        />
      </div>
      <div className="actions">
        <button
          type="submit"
          className="bg-purple-950 text-white px-6 py-1 border w-fit ease-in duration-200 hover:scale-95 "
        >
          Add User
        </button>
      </div>
    </form>
  );
};

export default AddUserForm;
