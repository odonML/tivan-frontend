import React from "react";

function Modal({ children, bgColor = "bg-white", txColor = "text-gray-1" }) {
  return (
    <div
      className={`w-auto h-auto p-3 rounded-lg flex items-center justify-center ${bgColor} ${txColor}`}
    >
      <div className="h-auto p-2 rounded-lg border border-pink-0">
        {children}
      </div>
    </div>
  );
}

export default Modal;
