import styled from "@emotion/styled";
import React, { useRef } from "react";

import { useTextContext } from "../contexts/textContext";

function BoxType1() {
  const { text, setText, setRef } = useTextContext();

  const inputRef = useRef(null);

  const StyledBoxType1 = styled.div`
    height: 50px;
    width: 25%;
    background-color: lightgreen;
  `;

  console.log("Box 1 rendered");

  return (
    <StyledBoxType1>
      <p>BoxType1</p>
      <input
        type="text"
        name="text"
        value={text}
        onChange={(e) => {
          setText(() => e.target.value);
          setRef(() => inputRef);
        }}
        ref={inputRef}
      />
    </StyledBoxType1>
  );
}

export default BoxType1;
