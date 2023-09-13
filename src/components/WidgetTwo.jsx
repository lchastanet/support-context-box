import React from "react"
import styled from "@emotion/styled"

import InputBox from "./InputBox"
import OutputBox from "./OutputBox"

import { FlexRowContainer } from "../styles/FlexRowContainer"

function WidgetTwo() {
  const StyledWidgetTwo = styled.div`
    height: 150px;
    width: 80%;
    margin: auto;
    background-color: coral;
  `

  console.log("Widget Two rendered")

  return (
    <StyledWidgetTwo>
      <p>Widget Two</p>
      <FlexRowContainer>
        <OutputBox />
        <OutputBox />
        <InputBox />
      </FlexRowContainer>
    </StyledWidgetTwo>
  )
}

export default WidgetTwo
