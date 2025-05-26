// src/App.tsx
// src/App.tsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Projects from './components/projects'; // Твой компонент проектов
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />

        <main className="content">
          <Routes>
            {/* Главная страница */}
            <Route path="/Header" element={< Header/>} />

            {/* Страница проектов */}
            <Route path="/projects" element={<Projects />} />

            {/* Можно добавить другие маршруты позже */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;