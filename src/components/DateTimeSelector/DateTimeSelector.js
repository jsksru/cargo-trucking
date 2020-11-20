import React, { useState } from "react";
import { KeyboardDateTimePicker } from "@material-ui/pickers";

const DateTimeSelector = ({ initValue, handler }) => {
  const [ selectedDate, setSelectedDate ] = useState(new Date(initValue));
  
  const changeHandler = (value) => {
    setSelectedDate(value);
    handler(value);
  }

  return (
    <KeyboardDateTimePicker
        variant="inline"
        ampm={false}
        label="Выберите дату и время"
        value={selectedDate}
        onChange={changeHandler}
        onError={console.log}
        format="dd.MM.yyyy HH:mm"
      />
  );
}

export default DateTimeSelector;