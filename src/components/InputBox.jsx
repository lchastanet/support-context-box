import styled from "@emotion/styled"
import React, { useRef } from "react"

import { useTextContext } from "../contexts/textContext"

function InputBox() {
  const { text, setText, setRef } = useTextContext()

  const inputRef = useRef(null)

  const StyledInputBox = styled.div`
    height: 50px;
    width: 25%;
    background-color: lightgreen;
  `

  console.log("InputBox rendered")

  return (
    <StyledInputBox>
      <p>Input Box</p>
      <input
        type="text"
        name="text"
        value={text}
        onChange={(e) => {
          setText(() => e.target.value)
          setRef(() => inputRef)
        }}
        ref={inputRef}
      />
    </StyledInputBox>
  )
}

export default InputBox
