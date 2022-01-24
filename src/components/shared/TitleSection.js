import ButtonCheckbox from "components/shared/ButtonCheckbox";
import React from "react";
import { BiLockAlt, BiLockOpenAlt } from "react-icons/bi";

function TitleSection({ text, locked }) {
  return (
    <div className="flex items-center justify-center">
      <p className="mx-1 text-base">{text}</p>
      {locked ? (
        <ButtonCheckbox icon={<BiLockAlt />} />
      ) : (
        <ButtonCheckbox icon={<BiLockOpenAlt />} />
      )}
    </div>
  );
}

export default TitleSection;
