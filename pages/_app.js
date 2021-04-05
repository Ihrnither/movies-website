import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import CustomScrollbar from "../components/CustomScrollbar";
import "../styles/globals.css";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#FAE807",
    },
    seconday: {
      main: "#A6A2A2",
    },
  },
});

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <CustomScrollbar>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </CustomScrollbar>
  );
}

export default MyApp;
