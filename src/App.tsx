import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Layout from "./components";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes";
function App(): JSX.Element {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Layout />
        <MainRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
