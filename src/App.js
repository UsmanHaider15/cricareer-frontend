import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import IccPlayerComparison from "./components/IccPlayerComparison";
import PslPlayerProfiles from "./components/profiles/PslPlayerProfiles";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/comparisons/icc_player_comparison">
                Icc Player comparisons
              </Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/comparisons">
            <div className="App" style={{ paddingBottom: 500 }}>
              <IccPlayerComparison />
            </div>
          </Route>
          <Route path="/">
            <PslPlayerProfiles />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
