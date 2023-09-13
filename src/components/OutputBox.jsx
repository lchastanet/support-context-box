import styled from "@emotion/styled"
import React from "react"

function OutputBox() {
  const StyledOutputBox = styled.div`
    height: 50px;
    width: 25%;
    background-color: lightskyblue;
  `

  console.log("OutpuBox rendered")

  return (
    <StyledOutputBox>
      <p>Output Box</p>
      <p>{}</p>
    </StyledOutputBox>
  )
}

export default OutputBox
