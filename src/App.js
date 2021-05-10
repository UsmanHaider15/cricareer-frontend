import React, { useState, useEffect } from "react";
import "./App.css";
import IccPlayerComparison from "./Components/IccPlayerComparison";
import LeaguePlayerProfiles from "./Components/Profiles/LeaguePlayerProfiles";
import LeaguePlayersComparison from "./Components/Comparisons/LeaguePlayersComparison";
import IccPlayerProfile from "./Components/Profiles/IccPlayerProfile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import MenuToolbar from "./Components/MenuToolbar";
import Home from "./Components/Home";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: 20,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();
  const history = useHistory();

  const onBackButtonEvent = (e) => {
    e.preventDefault();
    history.push("/");
  };

  useEffect(() => {
    if (process.env.REACT_APP_ENVIRONMENT === "PROD") {
      const first_script = document.createElement("script");
      first_script.src =
        "https://www.googletagmanager.com/gtag/js?id=G-5KY9X93YJY";
      first_script.async = true;
      document.head.appendChild(first_script);
      const second_script = document.createElement("script");
      second_script.innerHTML = ` window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-L1814RT31Y');`;
      document.head.appendChild(second_script);
    }
  }, []);

  useEffect(() => {
    window.history.pushState(null, null, window.location.pathname);
    window.addEventListener("popstate", onBackButtonEvent);
    return () => {
      window.removeEventListener("popstate", onBackButtonEvent);
    };
  }, []);

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid xs={0} md={3}></Grid>
          <Grid xs={12} md={6}>
            <Paper className={classes.paper}>
              <Router>
                <CssBaseline />
                <MenuToolbar />

                <div style={{ marginTop: 40 }}>
                  <div>
                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                    <div className="App" style={{ paddingBottom: 500 }}>
                      <Switch>
                        <Route path="/" exact>
                          <Home />
                        </Route>
                        <Route path="/profiles/icc_profile">
                          <IccPlayerProfile />
                        </Route>
                        <Route path="/profiles/psl_profile">
                          <LeaguePlayerProfiles
                            leagueName="psl"
                            initialPlayerID="440"
                          />
                        </Route>
                        <Route path="/profiles/ipl_profile">
                          <LeaguePlayerProfiles
                            leagueName="ipl"
                            initialPlayerID="146"
                          />
                        </Route>
                        <Route path="/comparisons/icc_comparison">
                          <IccPlayerComparison />
                        </Route>

                        <Route path="/comparisons/psl_comparison">
                          <LeaguePlayersComparison
                            leagueName="psl"
                            initialFirstPlayerID="440"
                            initialSecondPlayerID="441"
                          />
                        </Route>
                        <Route path="/comparisons/ipl_comparison">
                          <LeaguePlayersComparison
                            leagueName="ipl"
                            initialFirstPlayerID="146"
                            initialSecondPlayerID="28"
                          />
                        </Route>
                      </Switch>
                    </div>
                  </div>
                </div>
              </Router>
            </Paper>
          </Grid>
          <Grid xs={0} md={3}></Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}

export default App;
