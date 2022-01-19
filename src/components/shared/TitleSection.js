import React from "react";
import { BiLockAlt, BiLockOpenAlt } from "react-icons/bi";
import ButtonIcon from "./ButtonIcon";

function TitleSection({ text, locked }) {
  return (
    <div className="flex items-center border">
      <p className="mx-1 text-base">{text}</p>
      {locked ? (
        <ButtonIcon icon={<BiLockAlt />} />
      ) : (
        <ButtonIcon icon={<BiLockOpenAlt />} />
      )}
    </div>
  );
}

export default TitleSection;
