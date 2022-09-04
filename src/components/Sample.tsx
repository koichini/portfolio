import { useState } from 'react';
import logo from '../logo.svg';

function Sample() {
  return (
    <header className="App-header">
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

const numbers = [1, 2, 3];
const listItems = numbers.map((number) => <li>{number}</li>);

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
export default Sample;
