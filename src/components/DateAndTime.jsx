import  React, { useState } from "react";
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
      console.log("Selected Date and Time:", formattedDateTime);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateTimePicker"]}>
        <DateTimePicker
          label="Basic date time picker"
          value={selectedDateTime}
          onChange={handleDateTimeChange}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
