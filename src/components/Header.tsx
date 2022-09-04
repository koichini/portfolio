import { useState } from 'react';
import Nav from './Nav';
import logo from '../logo.svg';

function Header() {
  return (
      <header className="App-header">
        <h3>Nav area</h3>
        <Nav />
        <h3>list Items</h3>
        <ul>{listItems}</ul>
        <img src={logo} className="App-logo" alt="logo" />
        <LikeButton />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
  );
}

const numbers = [1, 2, 3]
const listItems = numbers.map((number) => 
  <li>{number}</li>
);

function LikeButton() {
  const [count, setCount] = useState(999);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <span className="likeButton" onClick={handleClick}>
      ♥ {count}
    </span>
  );
}
export default Header;