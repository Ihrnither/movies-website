import React from "react";
import "../styles/globals.css";
import { Scrollbars } from "react-custom-scrollbars";

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <Scrollbars style={{ width: "100vw", height: "100vh" }}>
      <Component {...pageProps} />
    </Scrollbars>
  );
}

export default MyApp;
