import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { useState } from "react";

import "./App.css";
import MainWrapper from "./mainWrapper/pages/MainWrapper";
import LogInPage from "./sections/authenticationSection/pages/LogInPage";
import SignUpPage from "./sections/authenticationSection/pages/SignUpPage";
import DashboardPage from "./sections/dashboardSection/pages/DashboardPage";
import AccountPage from "./sections/accountSection/pages/AccountPage";
import ProjectPage from "./sections/projectSection/pages/ProjectPage";
import NotificationPage from "./sections/notificationSection/pages/NotificationPage";
import NotFound from "./shared/pages/NotFound";
import { AuthContext } from "./contexts/AuthContext";
import ProjectViewer from "./sections/projectSection/pages/ProjectViewer";
import ProjectEditor from "./sections/projectSection/pages/ProjectEditor";
import ProjectEditorWrapper from "./sections/projectSection/components/ProjectEditorWrapper";
import MyAccountPage from "./sections/accountSection/pages/MyAccountPage";
import AccountEditor from "./sections/accountSection/pages/AccountEditor";

const theme = createTheme({
  palette: {
    primary: {
      light: "#800000",
      main: "#800000",
      dark: "#800000",
      contrastText: "#FFFFFF",
    },
    secondary: {
      light: "#F7CC00",
      main: "#F7CC00",
      dark: "#F7CC00",
      contrastText: "#000000",
    },
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function App() {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user: user, setUser: setUser }}>
      <ThemeProvider theme={theme}>
        {!user && (
          <Router>
            <Switch>
              <Route exact path="/signup">
                <SignUpPage />
              </Route>
              <Route path="/">
                <LogInPage />
              </Route>
              <Route exact path="*">
                <NotFound />
              </Route>
            </Switch>
          </Router>
        )}
        {user && (
          <Router>
            <MainWrapper>
              <Switch>
                <Route exact path="/">
                  <DashboardPage />
                </Route>
                <Route exact path="/dashboard">
                  <DashboardPage />
                </Route>
                <Route exact path="/accounts">
                  <AccountPage />
                </Route>
                <Route exact path="/accounts/:id"></Route>
                <Route exact path="/projects/new">
                  <ProjectEditor isNew={true} />
                </Route>
                <Route exact path="/projects">
                  <ProjectPage />
                </Route>
                <Route exact path="/projects/:id">
                  <ProjectViewer />
                </Route>
                <Route exact path="/projects/:id/edit">
                  <ProjectEditorWrapper />
                </Route>
                <Route exact path="/notifications">
                  <NotificationPage />
                </Route>
                <Route exact path="/notifications/:id"></Route>
                <Route exact path="/myaccount">
                  <MyAccountPage />
                </Route>
                <Route exact path="/myaccount/edit">
                  <AccountEditor />
                </Route>
                <Route exact path="*">
                  <NotFound />
                </Route>
              </Switch>
            </MainWrapper>
          </Router>
        )}
      </ThemeProvider>
    </AuthContext.Provider>
  );
}

export default App;
