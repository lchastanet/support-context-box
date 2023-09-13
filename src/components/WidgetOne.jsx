import styled from "@emotion/styled"
import React from "react"
import InputBox from "./InputBox"
import OutputBox from "./OutputBox"

import { FlexRowContainer } from "../styles/FlexRowContainer"

function WidgetOne() {
  const StyledBagOne = styled.div`
    height: 150px;
    width: 80%;
    margin: auto;
    background-color: aliceblue;
  `

  console.log("Widget One rendered")

  return (
    <StyledBagOne>
      <p>Widget One</p>
      <FlexRowContainer>
        <InputBox />
        <OutputBox />
        <InputBox />
      </FlexRowContainer>
    </StyledBagOne>
  )
}

export default WidgetOne
