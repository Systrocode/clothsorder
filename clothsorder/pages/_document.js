import { Html, Head, Main, NextScript } from "next/document";
import { BrowserRouter } from "react-router-dom";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        {/* <BrowserRouter> */}
        <Main />
        <NextScript />
        {/* </BrowserRouter> */}
      </body>
    </Html>
  );
}
