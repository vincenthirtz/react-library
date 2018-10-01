import colors from "./colors";

const checkboxSpanBorder = "0.143em solid #d0d0d0";
const content = "'\\e80d'";

export default {
  input: {
    checkedBackground: colors.mainColor,
    checkedBorder: checkboxSpanBorder,
    checkedBeforeBorder: checkboxSpanBorder,
  },
  checkbox: {
    border: checkboxSpanBorder,
    fontFamily: "'da'",
    content: content,
  },
  span: {
    backgroundColor: colors.white,
    border: checkboxSpanBorder,
    beforeBackgroundColor: colors.white,
    beforeBorder: checkboxSpanBorder,
  },
};
