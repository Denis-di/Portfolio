// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';


const Header: React.FC = () => {
  return (
    <header style={{ padding: '2rem 20rem', backgroundColor: '#333', color: 'white' }}>
      <h1>Business Project</h1>
      <nav>
        <ul style={{ display: 'flex', gap: '5rem' }}>
          <li><Link to= "/">Главная </Link></li>
          <li> <Link to= "/projects">Проекты </Link></li>
          <li> <Link to= "/Contacts">Контакты</Link> </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;