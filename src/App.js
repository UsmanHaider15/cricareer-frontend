import React, { useEffect } from "react";
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

import { useHistory } from "react-router-dom";
const reload = () => window.location.reload();

function App() {
  const history = useHistory();

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
      <div>
        <Router>
          <CssBaseline />
          <MenuToolbar />
          <div style={{ marginTop: 40 }}>
            <div>
              <div className="App" style={{ paddingBottom: 50 }}>
                <Switch>
                  <Route path="/" exact>
                    <Home />
                  </Route>
                  <Grid container spacing={1}>
                    <Grid xs={0} md={3}></Grid>
                    <Grid xs={12} md={6}>
                      <Paper>
                        <Route path="/profiles/icc_profile">
                          <IccPlayerProfile initialPlayerID="253802" />
                        </Route>
                        <Route path="/profiles/psl_profile">
                          <LeaguePlayerProfiles
                            leagueName="psl"
                            initialPlayerID="1"
                          />
                        </Route>
                        <Route path="/profiles/ipl_profile">
                          <LeaguePlayerProfiles
                            leagueName="ipl"
                            initialPlayerID="46"
                          />
                        </Route>
                        <Route path="/profiles/bbl_profile">
                          <LeaguePlayerProfiles
                            leagueName="bbl"
                            initialPlayerID="17"
                          />
                        </Route>
                        <Route path="/profiles/cpl_profile">
                          <LeaguePlayerProfiles
                            leagueName="cpl"
                            initialPlayerID="17"
                          />
                        </Route>
                        <Route path="/profiles/super_smash_profile">
                          <LeaguePlayerProfiles
                            leagueName="super_smash"
                            initialPlayerID="17"
                          />
                        </Route>
                        <Route path="/profiles/t20_blast_profile">
                          <LeaguePlayerProfiles
                            leagueName="t20_blast"
                            initialPlayerID="2"
                          />
                        </Route>
                        <Route path="/comparisons/icc_comparison">
                          <IccPlayerComparison
                            initialFirstPlayerID="253802"
                            initialSecondPlayerID="28081"
                          />
                        </Route>

                        <Route path="/comparisons/psl_comparison">
                          <LeaguePlayersComparison
                            leagueName="psl"
                            initialFirstPlayerID="1"
                            initialSecondPlayerID="2"
                          />
                        </Route>
                        <Route path="/comparisons/ipl_comparison">
                          <LeaguePlayersComparison
                            leagueName="ipl"
                            initialFirstPlayerID="46"
                            initialSecondPlayerID="177"
                          />
                        </Route>
                        <Route path="/comparisons/bbl_comparison">
                          <LeaguePlayersComparison
                            leagueName="bbl"
                            initialFirstPlayerID="16"
                            initialSecondPlayerID="17"
                          />
                        </Route>
                        <Route path="/comparisons/cpl_comparison">
                          <LeaguePlayersComparison
                            leagueName="cpl"
                            initialFirstPlayerID="5"
                            initialSecondPlayerID="17"
                          />
                        </Route>
                        <Route path="/comparisons/super_smash_comparison">
                          <LeaguePlayersComparison
                            leagueName="super_smash"
                            initialFirstPlayerID="12"
                            initialSecondPlayerID="17"
                          />
                        </Route>
                        <Route path="/comparisons/t20_blast_comparison">
                          <LeaguePlayersComparison
                            leagueName="t20_blast"
                            initialFirstPlayerID="2"
                            initialSecondPlayerID="13"
                          />
                        </Route>
                      </Paper>
                    </Grid>
                    <Grid xs={0} md={3}></Grid>
                  </Grid>
                  <Route path="/sitemap.txt" onEnter={reload} />
                </Switch>
              </div>
            </div>
          </div>
        </Router>
      </div>
    </React.Fragment>
  );
}

export default App;
