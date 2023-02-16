import styled from "@emotion/styled";

import BagOne from "./components/BagOne";
import BagTwo from "./components/BagTwo";

import { TextContextProvider } from "./contexts/textContext";

function App() {
  const MainContainer = styled.div`
    height: 350px;
    background-color: lightgrey;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `;

  console.log("App rendered");

  return (
    <TextContextProvider>
      <MainContainer>
        <p>App</p>
        <BagOne />
        <BagTwo />
      </MainContainer>
    </TextContextProvider>
  );
}

export default App;
