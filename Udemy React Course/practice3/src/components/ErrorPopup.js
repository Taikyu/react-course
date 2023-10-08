import React from "react";

const ErrorPopup = (props) => {
  const cancelHandler = () => {
    props.onCancel();
  };

  return (
    <div
      onClick={cancelHandler}
      className="flex justify-center fixed top-0 left-0 w-full h-full bg-black/50 "
    >
      <div className=" relative shadow  rounded-lg w-[45rem] h-[12rem] mx-auto my-auto bg-white">
        <div className="w-full bg-purple-950 text-white text-xl rounded-t-lg font-bold  px-5 py-2">
          Invalid input
        </div>
        <div className="text-lg m-5">{props.children}</div>
        <button
          onClick={cancelHandler}
          className="absolute bottom-0 right-0  bg-purple-950 text-white text-md px-6 py-1 m-5 border w-fit ease-in duration-100 hover:scale-95 "
        >
          Okay
        </button>
      </div>
    </div>
  );
};

export default ErrorPopup;
