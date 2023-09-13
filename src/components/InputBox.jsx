import styled from "@emotion/styled"
import React, { useRef } from "react"

function InputBox() {
  const StyledInputBox = styled.div`
    height: 50px;
    width: 25%;
    background-color: lightgreen;
  `

  console.log("InputBox rendered")

  return (
    <StyledInputBox>
      <p>Input Box</p>
      <input type="text" name="text" value={""} onChange={(e) => {}} />
    </StyledInputBox>
  )
}

export default InputBox
