// src/App.tsx
// src/App.tsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Projects from './components/projects'; // Твой компонент проектов
import Header from './components/Header';
import Contacts from './components/Contacts'; // Твой компонент контактов
import './App.css';

function App() {
  return (
    <Router>
      <div className="app" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' , alignItems: 'center'}}>
        <Header />

        <main className="content">
          <Routes>
            {/* Главная страница */}
            <Route path="/Header" element={< Header/>} />

            {/* Страница проектов */}
            <Route path="/projects" element={<Projects />} />
            {/* Страница контактов */}
            <Route path="/Contacts" element={<Contacts/>}  /> 
            {/* Главная страница по умолчанию */}
            <Route path="/" element={<h1>Добро пожаловать в мой бизнес-проект!</h1>} />

            {/* Можно добавить другие маршруты позже */}
          </Routes>
        </main> 
      </div>
    </Router>
  );
}

export default App;