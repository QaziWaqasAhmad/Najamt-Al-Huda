import {styled} from "@mui/system";
// import { primaryColor } from "../../constants/colors";

const dynamicTableStyle = styled((theme) => ({
  statusSwitchOn: {
    "&.MuiSwitch-root .MuiSwitch-switchBase": {
      color: "red",
    },
    "&.MuiSwitch-root .MuiSwitch-track": {
      background: "red",
    },
  },
  restSwitch: {
    "&.MuiFormControlLabel-root .MuiSwitch-root .MuiSwitch-track": {
      backgroundColor: "red",
    },
    "&.MuiFormControlLabel-root .MuiSwitch-root .MuiSwitch-switchBase": {
      color: "red",
    },
    "&.MuiFormControlLabel-root": {
      marginTop: "15px",
      marginLeft: "13px",
    },
  },
}));

export default dynamicTableStyle;
