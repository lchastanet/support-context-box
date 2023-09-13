import styled from "@emotion/styled"

import WidgetOne from "./components/WidgetOne"
import WidgetTwo from "./components/WidgetTwo"

import { TextContextProvider } from "./contexts/textContext"

function App() {
  const MainContainer = styled.div`
    height: 350px;
    background-color: lightgrey;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `

  console.log("App rendered")

  return (
    <TextContextProvider>
      <MainContainer>
        <p>App</p>
        <WidgetOne />
        <WidgetTwo />
      </MainContainer>
    </TextContextProvider>
  )
}

export default App
