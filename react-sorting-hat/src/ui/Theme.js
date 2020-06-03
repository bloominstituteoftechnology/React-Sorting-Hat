import { createMuiTheme } from "@material-ui/core/styles";
import createPalette from "@material-ui/core/styles/createPalette";

const gray = "#97999E";
const green = "#7B8A5B";
const olive = "#A69F69";
const brown = "#362418";
const blue = "#C5CED3";

export default createMuiTheme({
  palette: createPalette({
    common: {
      blue: blue,
      brown: brown,
      olive: olive,
      green: green,
      gray: gray,
    },
    primary: {
      main: green, // by only specifying a main color material-ui will auto generate light and dark versions to use
    },
    secondary: {
      main: green, // by only specifying a main color material-ui will auto generate light and dark versions to use
    },
  }),
  typography: {
    h1: {
      color: gray,
      fontSize: "4rem",
      textAlign: "center",
    },
    h2: {
      color: olive,
      fontSize: "3rem",
      textAlign: "center",
    },
    h3: {
      color: olive,
      fontSize: "2.5rem",
      textAlign: "center",
    },
    h5: {
      color: brown,
      fontSize: "2rem",
      fontWeight: "bold",
    },
    h6: {
        color: blue,
        fontSize: '1.5em',
    },
    body2: {
      color: gray,
      fontSize: "1.6rem",
      textAlign: "center",
    },
    body1: {
      color: blue,
    },
  },
});
