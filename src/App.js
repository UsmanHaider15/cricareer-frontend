import React, { useEffect } from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import MenuToolbar from "./Components/Common/MenuToolbar";
import Home from "./Components/Home/Home";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { comparisonsLinks, profileLinks, LeagueLinks } from "./config";

import { useHistory } from "react-router-dom";
const reload = () => window.location.reload();

function App() {
  const history = useHistory();

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
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
    const onBackButtonEvent = (e) => {
      e.preventDefault();
      history.push("/");
    };

    window.history.pushState(null, null, window.location.pathname);
    window.addEventListener("popstate", onBackButtonEvent);
    return () => {
      window.removeEventListener("popstate", onBackButtonEvent);
    };
  }, [history]);

  return (
    <React.Fragment>
      <Router>
        <CssBaseline />
        <MenuToolbar />

        <div className="App" style={{ paddingBottom: 50 }}>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Grid container spacing={1} sx={{ paddingTop: { xs: 6, md: 8 } }}>
              <Grid item xs={0} md={3} />
              <Grid item xs={12} md={6}>
                <Paper>
                  {profileLinks.map(
                    ({ link, Component, leagueName, playerID }, idx) => (
                      <Route key={idx} path={link}>
                        <Component
                          leagueName={leagueName}
                          initialPlayerID={playerID}
                        />
                      </Route>
                    )
                  )}

                  {comparisonsLinks.map(
                    (
                      {
                        Component,
                        link,
                        leagueName,
                        firstPlayerID,
                        secondPlayerID,
                      },
                      idx
                    ) => (
                      <Route key={idx} path={link}>
                        <Component
                          leagueName={leagueName}
                          initialFirstPlayerID={firstPlayerID}
                          initialSecondPlayerID={secondPlayerID}
                        />
                      </Route>
                    )
                  )}

                  {LeagueLinks.map(({ Component, link, leagueName }, idx) => (
                    <Route key={idx} path={link}>
                      <Component leagueName={leagueName} />
                    </Route>
                  ))}
                </Paper>
              </Grid>
              <Grid item xs={0} md={3}></Grid>
            </Grid>
            <Route path="/sitemap.txt" onEnter={reload} />
          </Switch>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
