import React from "react";
import "./App.css";
import IccPlayerComparison from "./components/IccPlayerComparison";
import LeaguePlayerProfiles from "./components/profiles/LeaguePlayerProfiles";
import LeaguePlayersComparison from "./components/comparisons/LeaguePlayersComparison";
import IccPlayerProfile from "./components/profiles/IccPlayerProfile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import MenuToolbar from "./components/MenuToolbar";
import Home from "./components/Home";

export default function App() {
  return (
    <React.Fragment>
      <Router>
        <CssBaseline />

        <MenuToolbar />

        <div style={{ marginTop: 60 }}>
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
    </React.Fragment>
  );
}
