import React from "react";
import styled from "@emotion/styled";

import BoxType1 from "./BoxType1";
import BoxType2 from "./BoxType2";

import { FlexRowContainer } from "../styles/FlexRowContainer";

function BagTwo() {
  const StyledBagTwo = styled.div`
    height: 150px;
    width: 80%;
    margin: auto;
    background-color: coral;
  `;

  console.log("Bag Two rendered");

  return (
    <StyledBagTwo>
      <p>BagTwo</p>
      <FlexRowContainer>
        <BoxType2 />
        <BoxType2 />
        <BoxType1 />
      </FlexRowContainer>
    </StyledBagTwo>
  );
}

export default BagTwo;
