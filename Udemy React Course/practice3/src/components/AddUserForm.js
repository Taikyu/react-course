import React, { useState } from "react";

import Card from "./UI/Card";
import ErrorPopup from "../components/ErrorPopup";

const AddUserForm = (props) => {
  const blankUser = {
    name: "",
    age: "",
  };
  const [userInput, setUserInput] = useState(blankUser);
  const [emptyError, setEmptyError] = useState(false);
  const [ageError, setAgeError] = useState(false);
  const [nameError, setNameError] = useState(false);

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
    if (userInput.name.trim() === "" && userInput.age === "") {
      return setEmptyError((prevError) => !prevError);
    }
    if (+userInput.age < 0) {
      return setAgeError((prevError) => !prevError);
    }
    if (userInput.name === "") {
      return setNameError((prevError) => !prevError);
    }
    props.onSubmitUser(userInput);

    setUserInput(blankUser);
  };

  const cancelHandler = () => {
    setAgeError(false);
    setNameError(false);
    setEmptyError(false);
  };

  return (
    <Card>
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
            className="bg-purple-950 text-white px-6 py-1 border w-fit ease-in duration-100 hover:scale-95 "
          >
            Add User
          </button>
        </div>
      </form>
      {emptyError === true && (
        <ErrorPopup onCancel={cancelHandler}>
          Please enter a valid name and age (non-empty values).
        </ErrorPopup>
      )}
      {nameError === true && (
        <ErrorPopup onCancel={cancelHandler}>
          Please enter a valid name (non-empty values).
        </ErrorPopup>
      )}
      {ageError === true && (
        <ErrorPopup onCancel={cancelHandler}>
          Please enter a valid age ({`>`}0).
        </ErrorPopup>
      )}
    </Card>
  );
};

export default AddUserForm;
