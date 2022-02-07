import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import ButtonIcon from "./ButtonIcon";

function Modal({
  children,
  bgTransparent = "bg-gray-100",
  alignItemsModal = "items-center",
  justifyContentModal = "justify-center",
  widthModal = "w-auto",
  heightModal = "h-auto",
  roundedModal = true,
  bgColorModal = "bg-white",
  txColorModal = "text-gray-1",
  borderColorModal = "border-pink-0",
  iconColor = "",
  icon,
  closeModal,
}) {
  return (
    <span
      className={`fixed top-0 left-0 w-full h-full flex ${alignItemsModal} ${justifyContentModal} ${bgTransparent}`}
    >
      <div
        className={`absolute p-3 flex items-center justify-center ${widthModal} ${heightModal} ${
          roundedModal ? "rounded-lg" : ""
        } ${bgColorModal} ${txColorModal}`}
      >
        <div
          className={`relative w-full h-full p-3 rounded-lg flex flex-col items-center justify-center border text-justify ${borderColorModal}`}
        >
          {closeModal ? (
            <div className="absolute top-0 right-0 p-1">
              <ButtonIcon
                click={closeModal}
                icon={<AiOutlineClose size={20} />}
              />
            </div>
          ) : (
            ""
          )}
          {icon ? (
            <div className={`flex items-center justify-center ${iconColor}`}>
              {icon}
            </div>
          ) : (
            ""
          )}
          {children}
        </div>
      </div>
    </span>
  );
}

export default Modal;
