import React, { useEffect, useState, useRef, useContext } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { AppContext } from "./context";
const DISTANCE = ["mm", "m", "km", "in", "ft"];

export const MyComponent = ({ name, componentValue }) => {
  const fieldRef = useRef(null);

  const [state, setState] = useContext(AppContext);

  const [unitValue, setUnitValue] = useState(DISTANCE[0]);

  const populateMenuItems = DISTANCE.map((item) => {
    return (
      <MenuItem key={item} value={item}>
        {item}
      </MenuItem>
    );
  });

  useEffect(() => {
    const name = fieldRef.current.node.name;
    const value = unitValue;
    setState({ ...state, [name]: value });
  }, [unitValue]);

  const handleChange = (e) => {
    setUnitValue(e.target.value);
  };

  return (
    <FormControl style={{ padding: "20px" }}>
      <InputLabel>{name.toUpperCase()}</InputLabel>
      <Select
        name={name}
        inputRef={fieldRef}
        value={unitValue}
        onChange={(e) => handleChange(e)}
        style={{ width: "100px" }}
      >
        {populateMenuItems}
      </Select>
    </FormControl>
  );
};
