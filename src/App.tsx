import React, { useState } from 'react';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

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
export default App;
