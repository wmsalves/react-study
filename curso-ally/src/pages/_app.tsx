import type { AppProps } from "next/app";
import { axeAccessibilityReporter } from "../utils/axeAccessibilityReporter";

import "../styles/global.css";
import { use, useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    axeAccessibilityReporter(pageProps.axeResults);
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
