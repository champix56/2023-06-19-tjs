import React from "react";
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="Home">
      <h1>Hello</h1>
      <h2>Liens de l'app</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/thumbnail">Thumbnail</Link></li>
        <li><Link to="/editor">Editor</Link></li>
      </ul>
    </div>
  );
};

export default Home;
