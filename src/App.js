import "./App.css";
import SideMenu from "./components/sideMenu";
import { makeStyles, createMuiTheme, ThemeProvider } from "@material-ui/core";
import Header from "./components/Header";

import Employee from "./Pages/Employess/Employee";
const theme = createMuiTheme({
  palatte: {
    primary: {
      main: "#333996",
      light: "#3c44b126",
    },
    secondary: {
      main: "#f83245",
      light: "#f8324526",
    },
    background: {
      default: "#f4f5fd",
    },
  },
});
const useStyles = makeStyles({
  appMain: {
    paddingLeft: "320px",
    width: "100%",
  },
});
function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <SideMenu />
      </div>
      <div className={classes.appMain}>
        <Header />

        <Employee />
      </div>
    </ThemeProvider>
  );
}

export default App;
