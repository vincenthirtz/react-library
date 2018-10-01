import colors from "./colors";

export default {
  color: colors.textColor,
  backgroundColor: colors.white,
  fontSize: "1em",
  fontWeight: "700",
  fadeBackground: "rgba(0, 0, 0, 0.7)",
  margin: "7.143em auto",
  boxShadow: `0 0 0.071em ${colors.secondTextColor}`,
  border: `.071em solid ${colors.thirdBorderColor}`,
  borderRadius: ".5em",
  close: {
    fontSize: "1.1em",
    color: colors.textColorSecondary,
    icon: "cancel-1",
    right: "10px",
    top: "10px",
  },
  header: {
    textAlign: "center",
    padding: "1em 2em",
    fontSize: "1.143em",
  },
  content: {
    padding: "1.5em 2em",
    lineHeight: "1.4",
    minHeight: "4em",
  },
  footer: {
    textAlign: "right",
    padding: "1em 2em 2em",
    lineHeight: "1.4",
  },
};
