import React, { Suspense, useState } from "react";
import "antd/dist/antd.css";
import "./scss/main.css";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "./store/Reducer/index";
import { theme } from "./store/ActionTypes/Theme/Theme";
import { StyledMainLayout } from "./style-component/Login";
import { Redirect, Route, Switch } from "react-router";
import Test from "./pages/Test";

const Home = React.lazy(() => import("./pages/Home"));
const Login = React.lazy(() => import("./pages/Login"));

function App() {
  const currentTheme: theme = useSelector(
    (state: RootState) => state.theme.Theme
  );

  return (
    <ThemeProvider theme={currentTheme}>
      <StyledMainLayout
        className={`${currentTheme.themestyle} ${currentTheme.themecolor} `}
      >
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <Route path="/Login" exact>
              <Login />
            </Route>

            <Route path="/Home">
              <Home />
            </Route>

            <Route path="/Test" exact>
              <Test />
            </Route>

            <Route path="/" exact>
              <Redirect to="/Login" />
            </Route>
          </Switch>
        </Suspense>
      </StyledMainLayout>
    </ThemeProvider>
  );
}

export default App;
