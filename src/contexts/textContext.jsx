import { createContext, useState, useContext, useEffect } from "react";

const TextContext = createContext();

export const useTextContext = () => useContext(TextContext);

export const TextContextProvider = ({ children }) => {
  const [text, setText] = useState("");
  const [ref, setRef] = useState(null);

  useEffect(() => {
    ref && ref.current.focus();
  }, [text]);

  return (
    <TextContext.Provider value={{ text, setText, setRef }}>
      {children}
    </TextContext.Provider>
  );
};
