import React from "react";
import ButtonIcon from "./ButtonIcon";

function Sidebar({ children, buttonsOfPages = [] }) {
  return (
    <div
      className={` w-full h-14 py-2 bg-purple-1  flex items-center justify-between md:w-14 md:h-full md:py-1 md:flex-col`}
    >
      <div className="w-full flex items-center justify-around md:flex-col-reverse md:gap-2 md:w-auto">
        {buttonsOfPages.map((button) => (
          <div className="flex flex-col items-center justify-center">
            <ButtonIcon
              key={button.id}
              icon={button.icon}
              click={button.action}
            />
            {/* <p className="text-sm text-white">{button.text}</p> */}
          </div>
        ))}
      </div>
      {children}
    </div>
  );
}

export default Sidebar;
