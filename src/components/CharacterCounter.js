import React from "react";
import { useRecoilValue } from "recoil";

import { charCountState } from "../atom/text/selectors/charCount";
import TextInput from "./TextInput";

export default function CharacterCounter() {
  const count = useRecoilValue(charCountState);

  return (
    <div>
      <TextInput />
      Character Count: {count}
    </div>
  );
}
