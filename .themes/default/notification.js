import colors from "./colors";

const notificationBackgroundColor = colors.notificationGrey;
const notificationColor = colors.white;

export default {
  width: "36em",
  color: notificationColor,
  backgroundColor: notificationBackgroundColor,
  fontSize: "1em",
  borderStyle: "solid",
  borderWidth: "1px",
  borderColor: notificationBackgroundColor,
  padding: "1.286em 1.5em 1.286em 1.286em",
  textShadow: "0 0.071em 0 #FFFFFF",
  alertColors: {
    success: "#00cc99",
    error: "#ff000d",
    warning: "#ff7120",
  },
};
