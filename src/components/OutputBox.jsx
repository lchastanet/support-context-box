import styled from "@emotion/styled"
import React from "react"

import { useTextContext } from "../contexts/textContext"

function OutputBox() {
  const { text } = useTextContext()

  const StyledOutputBox = styled.div`
    height: 50px;
    width: 25%;
    background-color: lightskyblue;
  `

  console.log("OutpuBox rendered")

  return (
    <StyledOutputBox>
      <p>Output Box</p>
      <p>{text}</p>
    </StyledOutputBox>
  )
}

export default OutputBox
