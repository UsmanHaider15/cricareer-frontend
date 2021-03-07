import React from "react";
import "./App.css";
import IccPlayerComparison from "./components/IccPlayerComparison";
import PslPlayerProfiles from "./components/profiles/PslPlayerProfiles";
import PslPlayersComparison from "./components/comparisons/PslPlayersComparison";
import IccPlayerProfile from "./components/profiles/IccPlayerProfile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import MenuToolbar from "./components/MenuToolbar";

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
                <Route path="/profiles/icc_player">
                  <IccPlayerProfile />
                </Route>
                <Route path="/profiles/psl_player">
                  <PslPlayerProfiles />
                </Route>
                <Route path="/comparisons/icc_player_comparison">
                  <IccPlayerComparison />
                </Route>

                <Route path="/comparisons/psl_player_comparison">
                  <PslPlayersComparison />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </React.Fragment>
  );
}
