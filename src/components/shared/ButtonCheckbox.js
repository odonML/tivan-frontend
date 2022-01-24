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
      <label className={` cursor-pointer`}>
        <input type="checkbox" onChange={(e) => handleChecked(e)} />
        <span
          className={`relative inline-block p-1 ${bgColor} ${txColor} rounded-full checked:bg-purple-200`}
        >
          {icon}
        </span>
      </label>
    </div>
  );
}

export default ButtonCheckbox;
