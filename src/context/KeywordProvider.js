import React, { useContext, useState } from "react";

const KeywordContext = React.createContext();

export function useKeyword() {
  return useContext(KeywordContext);
}

export function KeywordProvider({ children }) {
  const [keyword, setKeyword] = useState("");

  const value = {
    keyword,
    setKeyword,
  };

  return (
    <KeywordContext.Provider value={value}>{children}</KeywordContext.Provider>
  );
}
