import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// src/App.tsx
import Header from './components/Header';
export default App;
function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Добро пожаловать!</h2>
        <p>Это моё портфолио, где я буду показывать свои проекты.</p>
      </main>
    </div>
  );
}

export default App;