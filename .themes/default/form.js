import colors from "./colors";

const placeholderColor = "#a7a7a8";
export default {
  input: {
    background: colors.white,
    borderRadius: "0",
    borderColor: colors.thirdBorderColor,
    borderColorFocus: colors.mainColor,
    color: colors.textColorSecondary,
    placeholderColor: placeholderColor,
    padding: "0 1.5em",
  },
  checkbox: {
    border: "0.071em solid" + colors.primaryBorderColor,
    checkedBackground: colors.mainColor,
    beforeBorderColorRight: colors.primaryTextColor,
    beforeColor: colors.primaryTextColor,
    beforeBorderColor: colors.mainColor,
  },
  textarea: {
    background: colors.white,
    borderRadius: "0",
    border: "0.143em solid" + colors.thirdBorderColor,
    borderColorFocus: colors.mainColor,
    color: colors.textColorSecondary,
    placeholderColor: placeholderColor,
    padding: "1.5em",
  },
  select: {
    background: colors.white,
    borderRadius: "0",
    borderColor: colors.thirdBorderColor,
    color: colors.textColorSecondary,
    placeholderColor: placeholderColor,
    padding: "0 1.5em",
  },
  formGroup: {
    margin: "0 0 .5em",
    leftWidth: "30%",
  },
  formFooter: {
    textAlign: "right",
    margin: "2.143em 0",
  },
  formError: {
    color: "red",
  },
};
