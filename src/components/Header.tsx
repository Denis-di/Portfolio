// src/components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header style={{ padding: '1rem', backgroundColor: '#333', color: 'white' }}>
      <h1>Моё Портфолио</h1>
      <nav>
        <ul style={{ display: 'flex', gap: '1rem' }}>
          <li><a href="/">Главная</a></li>
          <li><a href="/projects">Проекты</a></li>
          <li><a href="/contact">Контакты</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;