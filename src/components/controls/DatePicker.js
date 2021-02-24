import React from "react";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
export default function DatePicker(props) {
  const { name, label, value, onChange } = props;

  const convertToDefaultParameter = (name, value) => ({
    target: { name, value },
  });

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        variant="inline"
        inputVariant="outlined"
        label={label}
        format="MM/dd/yyyy"
        name={name}
        value={value}
        onChange={(date) => onChange(convertToDefaultParameter(name, date))}
      />
    </MuiPickersUtilsProvider>
  );
}
