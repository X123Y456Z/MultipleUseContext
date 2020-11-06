import { Button } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import { AppContext, GlobalContext } from "./context";
import SelectContainer from "./SelectContainer";

export default function App() {
  const [state] = useContext(AppContext);
  const [globalState, setGlobalState] = useContext(GlobalContext);

  const updateState = () => {
    setGlobalState({
      ...globalState,
      selectData: state
    });
  };

  useEffect(() => {
    if (globalState.selectData !== null) {
      alert(JSON.stringify(globalState, null, 2));
    }
  }, [globalState]);

  const alertGlobalState = () => {
    setGlobalState({
      ...globalState,
      selectData: state
    });
  };

  return (
    <>
      <SelectContainer />
      <Button onClick={alertGlobalState}>Alert Global State</Button>
    </>
  );
}
