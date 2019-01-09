import { lighten } from "polished";
import { Theme } from "../../utils/styled";
import brandColors from "../colors/brandColors";

const lightTheme: Theme = {
  colors: {
    attrs: {
      str: "#f44336",
      agi: "#39d402",
      int: "#01a9f4"
    },
    background: brandColors.gray75,
    black: brandColors.black,
    body: brandColors.gray10,
    borders: lighten(0.05, brandColors.gray75),
    brand: brandColors.red,
    headings: brandColors.gray5,
    tableOdd: lighten(0.025, brandColors.gray75),

    white: brandColors.white
  },
  fonts: {
    headings:
      "'IBM Plex Sans', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, Arial, sans-serif",
    body:
      "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, Arial, sans-serif",
    monospace:
      "'IBM Plex Mono', Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace, monospace"
  },
  fontSizes: {
    h1: "2.441rem",
    h2: "1.953rem",
    h3: "1.563rem",
    h4: "1.25rem"
  },
  containerPadding: "1.5rem",
  breakpoints: {
    xs: "0px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px"
  },
  widths: {
    md: "720px",
    lg: "960px",
    xl: "1140px"
  },
  heights: {
    header: "60px"
  }
};

export default lightTheme;
