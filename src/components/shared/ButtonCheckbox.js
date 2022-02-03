import React, { useState } from "react";

function ButtonCheckbox({
  bgColorNoActive = "bg-purple-0",
  bgColorActive = "bg-yellow-0",
  txColorNoActive = "text-white",
  txColorActive = "text-purple-0",
  iconActive = null,
  iconNoActice = null,
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
          className={`relative inline-block p-1 rounded-full ${
            checked ? bgColorActive : bgColorNoActive
          } ${checked ? txColorActive : txColorNoActive}`}
        >
          {checked ? iconActive : iconNoActice}
        </span>
      </label>
    </div>
  );
}

export default ButtonCheckbox;
