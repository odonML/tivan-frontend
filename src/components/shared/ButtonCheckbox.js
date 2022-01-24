import React from "react";

function ButtonCheckbox({
  bgColor = "bg-purple-0",
  txColor = "text-white",
  icon,
}) {
  const handleChecked = (e) => {
    // Checked value
    const value = e.target.checked;
    console.log(value);
  };

  return (
    <div className="custom-checkbox">
      <label className={` cursor-pointer flex items-center`}>
        <input type="checkbox" onChange={(e) => handleChecked(e)} />
        <span
          className={`relative inline-block p-1 ${bgColor} ${txColor} rounded-full`}
        >
          {icon}
        </span>
      </label>
    </div>
  );
}

export default ButtonCheckbox;
