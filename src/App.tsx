import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SetLink from './components/SetLink';

function App() {
  return (
    <Router>
      <div>
        <nav className="d-flex justify-content-between">
          <div className="logo">
            <SetLink page="#" children="logo"></SetLink>
          </div>
          <ul className="nav">
            <li className="nav-item">
              <Link to="/" className="nav-link" aria-current="true">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/users" className="nav-link">
                Users
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link disabled" aria-details="true">
                blank
              </Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
