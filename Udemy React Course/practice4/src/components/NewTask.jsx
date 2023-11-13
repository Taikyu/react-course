import React, { useState, useRef } from "react";

import Modal from "./Modal.jsx";

function NewTask({ onAdd, projectId }) {
  const [task, setTask] = useState("");
  const modalRef = useRef();

  function handleTaskInput(e) {
    setTask(e.target.value);
  }

  function handleAddTask() {
    if (task.trim() === "") {
      modalRef.current.open();
      return;
    }

    onAdd(task, projectId);

    setTask("");
  }

  return (
    <>
      <Modal ref={modalRef} btnCaption="Close">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Ooops ... you have entered an invalid task.
        </p>
        <p className="text-stone-600 mb-4 pt-4">
          Task must not be an empty field.
        </p>
      </Modal>

      <div className="flex items-center gap-4">
        <input
          onChange={handleTaskInput}
          value={task}
          type="text"
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        />
        <button
          onClick={handleAddTask}
          className="text-stone-700 hover:text-stone-950"
        >
          Add Task
        </button>
      </div>
    </>
  );
}

export default NewTask;
