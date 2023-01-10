import { createContext, useState, useMemo, useContext } from 'react';

const GlobalContext = createContext();

const App = () => {
  const [a, updateA] = useState("");
  const [b] = useState("");

  const contextValue = useMemo(() => ({ a, b }), [a, b]);

  return (
    <GlobalContext.Provider value={contextValue}>
      <ConsumeA />
      <ConsumeB />
      <input value={a} onChange={(e) => updateA(e.target.value)} />
    </GlobalContext.Provider>
  );
}

function ConsumeA() {
  const { a } = useContext(GlobalContext);

  return a;
}

function ConsumeB() {
  const { b } = useContext(GlobalContext);

  console.log("render b with: ", b);

  return b;
}

export default App