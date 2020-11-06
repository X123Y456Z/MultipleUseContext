import React, { useState, useContext, useEffect } from "react";
import "./styles.css";
import { MyComponent } from "./MyCompProvider";
import { AppContext } from "./context";
import { Button } from "@material-ui/core";

export default function SelectContainer() {
  const [elements, setElements] = useState([]);
  const [counter, setCouter] = useState(0);
  const [state, setState] = useContext(AppContext);

  const addComponent = () => {
    setCouter((prevCount) => prevCount + 1);
    const name = `CASE-${counter}`;
    setElements((prevState) => [...prevState, <MyComponent name={name} />]);
  };
  const removeComponents = () => {
    setCouter((prevCount) => {
      const val = prevCount - 1;
      if (val < 0) {
        return 0;
      }
      return prevCount - 1;
    });
    elements.splice(elements.length - 1, 1);
    setElements(elements);

    const caseKeys = Object.keys(state);
    delete state[caseKeys[caseKeys.length - 1]];
    setState(state);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "400px"
        }}
      >
        <Button variant="contained" onClick={addComponent}>
          Add component
        </Button>

        <Button variant="contained" onClick={removeComponents}>
          Remove Component
        </Button>
      </div>

      <div
        style={{
          display: "flex",
          width: "600px",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          marginTop: "40px"
        }}
      >
        {elements}
      </div>
      <div style={{ marginTop: "30px" }}>
        <p style={{ fontFamily: "Arial", fontWeight: "bold" }}>
          Your current state
        </p>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
    </div>
  );
}
