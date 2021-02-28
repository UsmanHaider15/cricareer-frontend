import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import IccPlayerComparison from "./components/IccPlayerComparison";
import PslPlayerProfiles from "./components/profiles/PslPlayerProfiles";
import PslPlayersComparison from "./components/comparisons/PslPlayersComparison";
import IccPlayerProfile from "./components/profiles/IccPlayerProfile";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/profiles/icc_player">ICC Player Profile</Link>
            </li>
            <li>
              <Link to="/profiles/psl_player">PSL Player Profile</Link>
            </li>
            <li>
              <Link to="/comparisons/icc_player_comparison">
                ICC Player comparisons
              </Link>
            </li>

            <li>
              <Link to="/comparisons/psl_player_comparison">
                PSL Player comparisons
              </Link>
            </li>
          </ul>
        </nav>

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
    </Router>
  );
}
