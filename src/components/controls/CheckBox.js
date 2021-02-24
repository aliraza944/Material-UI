import {
  Checkbox as MuiCheckBox,
  FormControl,
  FormControlLabel,
} from "@material-ui/core";
import React from "react";

export default function CheckBox(props) {
  const { name, label, value, onChange } = props;
  const convertToDefaultParameter = (name, value) => ({
    target: { name, value },
  });
  return (
    <FormControl>
      <FormControlLabel
        control={
          <MuiCheckBox
            name={name}
            checked={value}
            color="primary"
            onChange={(e) =>
              onChange(convertToDefaultParameter(name, e.target.checked))
            }
          />
        }
        label={label}
      ></FormControlLabel>
    </FormControl>
  );
}
