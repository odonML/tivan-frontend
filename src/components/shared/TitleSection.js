import ButtonCheckbox from "components/shared/ButtonCheckbox";
import React from "react";
import { BiLockAlt, BiLockOpenAlt } from "react-icons/bi";

function TitleSection({ text }) {
  return (
    <div className="flex items-center justify-center">
      <p className="mx-1 text-base">{text}</p>
      <ButtonCheckbox
        iconActive={<BiLockOpenAlt size={20} />}
        iconNoActice={<BiLockAlt size={20} />}
      />
    </div>
  );
}

export default TitleSection;
