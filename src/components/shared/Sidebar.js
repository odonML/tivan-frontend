import React from "react";
import ButtonIcon from "./ButtonIcon";

function Sidebar({ children, buttonsOfPages = [] }) {
  return (
    <div
      className={` w-full h-full py-2 bg-purple-1  flex items-center justify-between md:w-14 md:py-5 md:flex-col`}
    >
      <div className="w-full flex items-center justify-around md:flex-col-reverse md:gap-2 md:w-auto">
        {buttonsOfPages.map((button) => (
          <ButtonIcon
            key={button.id}
            icon={button.icon}
            click={button.action}
          />
        ))}
      </div>
      {children}
    </div>
  );
}

export default Sidebar;
