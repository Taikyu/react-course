import React, { useRef } from "react";
import Input from "./Input.jsx";
import Modal from "./Modal.jsx";

const NewProject = ({ onAdd, onCancel }) => {
  const titleRef = useRef();
  const desctiptionRef = useRef();
  const dateRef = useRef();
  const modalRef = useRef();

  function handleSaveData() {
    const inputTitle = titleRef.current.value;
    const inputDesc = desctiptionRef.current.value;
    const inputDate = dateRef.current.value;

    if (
      inputTitle.trim() === "" ||
      inputDate.trim() === "" ||
      inputDesc.trim() === ""
    ) {
      modalRef.current.open();
      return;
    }

    onAdd({
      title: inputTitle,
      description: inputDesc,
      date: inputDate,
    });
  }

  return (
    <>
      <Modal ref={modalRef} btnCaption="Close">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Ooops ... looks like you forgot to add an input value somewhere.
        </p>
        <p className="text-stone-600 mb-4 pt-4">
          Provide a valid value for every input field.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={onCancel}
              className="text-stone-800 hover:text-stone-950"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSaveData}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={titleRef} label="Title" />
          <Input ref={desctiptionRef} label="Description" textarea />
          <Input type="date" ref={dateRef} label="Due Date" />
        </div>
      </div>
    </>
  );
};

export default NewProject;
