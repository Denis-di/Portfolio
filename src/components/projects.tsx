import React from 'react';

const projects: React.FC = () => {
    const ideas = [{
        name: "1 Проект",
        description : "Описание проекта 1",
        status: "В работе",
    },
    {
        name: "2 Проект",
        description : "Описание проекта 2",
        status: "Завершен",
    },
    {
        name: "3 Проект",
        description : "Описание проекта 3",
        status: "В ожидании",
    }]

  return (
    <header style={{ padding: '3rem', backgroundColor: '#333', color: 'white' }}>
      <h1>MY Projects</h1>
      <nav>
        {ideas.map((idea, index) => (
          <div key={index} style={{ marginBottom: '3rem' }}>
            <h2>{idea.name}</h2>
            <p>{idea.description}</p>
            <p><strong>Статус:</strong> {idea.status}</p>
          </div>
        ))}
      </nav>
    </header>
  );
};

export default projects;