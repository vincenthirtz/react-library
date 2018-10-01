import colors from "./colors";

const menuBackgroundColor = "#FFFFFF";
const menuTextColor = colors.secondTextColor;
const menuBorderColor = colors.primaryBorderColor;

export default {
  fontSize: "1em",
  width: "21.429em",
  backgroundColor: menuBackgroundColor,
  color: menuTextColor,
  lineHeight: "3.214em",

  shadow: {
    boxShadow: "0 0 3px #717171",
  },
  border: {
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: menuBorderColor,
  },
  hover: {
    backgroundColor: colors.mainColor,
    color: menuBackgroundColor,
  },
  submenu: {
    width: "21.429em",
  },
};
