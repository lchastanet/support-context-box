import styled from "@emotion/styled";
import React from "react";

import { useTextContext } from "../contexts/textContext";

function BoxType2() {
  const { text } = useTextContext();

  const StyledBoxType2 = styled.div`
    height: 50px;
    width: 25%;
    background-color: lightskyblue;
  `;

  return (
    <StyledBoxType2>
      <p>BoxType2</p>
      <p>{text}</p>
    </StyledBoxType2>
  );
}

export default BoxType2;
