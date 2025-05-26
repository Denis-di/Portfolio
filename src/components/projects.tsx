import React from 'react';
import { Link } from 'react-router-dom';

const projects: React.FC = () => {
  return (
    <header style={{ padding: '3rem', backgroundColor: '#333', color: 'white' }}>
      <h1>MY Projects</h1>
      <nav>
        <ul style={{ display: 'flex', gap: '5rem', margin:'20rem 0 0 0'}}>
          <li> 1 Задача </li>
          <li> 2 Задача </li>
          <li> 3 Задача </li>
        </ul>
      </nav>
    </header>
  );
};

export default projects;