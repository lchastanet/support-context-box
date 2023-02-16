import styled from "@emotion/styled";
import React from "react";
import BoxType1 from "./BoxType1";
import BoxType2 from "./BoxType2";

import { FlexRowContainer } from "../styles/FlexRowContainer";

function BagOne() {
  const StyledBagOne = styled.div`
    height: 150px;
    width: 80%;
    margin: auto;
    background-color: aliceblue;
  `;

  console.log("Bag One rendered");

  return (
    <StyledBagOne>
      <p>BagOne</p>
      <FlexRowContainer>
        <BoxType1 />
        <BoxType2 />
        <BoxType1 />
      </FlexRowContainer>
    </StyledBagOne>
  );
}

export default BagOne;
