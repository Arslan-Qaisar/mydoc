import { Html, Head, Main, NextScript } from "next/document";
import Nav from "./(components)/Nav";
import Footer from "./(components)/Footer";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
       <Nav/>
      <body>
        <Main />
        <NextScript />
        <Footer/>
      </body>
    </Html>
  );
}
