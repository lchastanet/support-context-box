import styled from "@emotion/styled"

import WidgetOne from "./components/WidgetOne"
import WidgetTwo from "./components/WidgetTwo"

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
    <MainContainer>
      <p>App</p>
      <WidgetOne />
      <WidgetTwo />
    </MainContainer>
  )
}

export default App
