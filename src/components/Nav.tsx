import { BrowserRouter, Route } from 'react-router-dom';

function Nav() {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Route path="/"><Home /></Route>
        </li>
      </ul>
    </BrowserRouter>
  );
}

function Home() {
  return <h2>Home</h2>;
}

export default Nav;