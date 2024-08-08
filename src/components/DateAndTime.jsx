import React, { useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from "dayjs";

export default function BasicDateTimePicker() {
  const [selectedDateTime, setSelectedDateTime] = useState(null);

  const handleDateTimeChange = (newDateTime) => {
    setSelectedDateTime(newDateTime);

    if (newDateTime) {
      const formattedDateTime = newDateTime.format("YYYY-MM-DD hh:mm:ss A");
      // console.log(formattedDateTime, 'timeeeeee');
    }
  };

  const shouldDisableDate = (date) => {
    return date.day() === 5;
  };

  const shouldDisableTime = (timeValue, clockType) => {
    if (clockType === "hours") {
      return timeValue < 10 || timeValue > 22;
    }
    return false;
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateTimePicker"]}>
        <DateTimePicker
          label="Basic date time picker"
          value={selectedDateTime}
          onChange={handleDateTimeChange}
          shouldDisableDate={shouldDisableDate}
          shouldDisableTime={shouldDisableTime}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}