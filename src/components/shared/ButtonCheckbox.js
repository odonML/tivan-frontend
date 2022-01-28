import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

function ButtonCheckbox({
  bgColorNoActive = "bg-purple-0",
  bgColorActive = "bg-yellow-0",
  txColorNoActive = "text-white",
  txColorActive = "text-purple-0",
  iconActive = <AiFillStar size={20} />,
  iconNoActice = <AiOutlineStar size={20} />,
  click = null,
}) {
  const [checked, setChecked] = useState(false);

  const handleChecked = (e) => {
    // Checked value
    const value = e.target.checked;
    setChecked(value);
    if (click != null) click(value);
  };

  return (
    <div className="custom-checkbox">
      <label className={` cursor-pointer flex items-center`}>
        <input
          type="checkbox"
          className="hidden"
          onChange={(e) => handleChecked(e)}
        />
        <span
          className={`relative inline-block p-1 ${
            checked ? bgColorActive : bgColorNoActive
          } ${checked ? txColorActive : txColorNoActive} rounded-full`}
        >
          {checked ? iconActive : iconNoActice}
        </span>
      </label>
    </div>
  );
}

export default ButtonCheckbox;
