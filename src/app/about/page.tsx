import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <main className="p-6 max-w-4xl mx-auto bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text">
      <h1 className="text-3xl font-bold mb-4">Sobre Nosotros</h1>
      <p className="text-lg mb-4">
        En Board Game Score Counter, estamos dedicados a proporcionar una herramienta
        sencilla y efectiva para calcular puntuaciones en juegos de mesa. Nuestro equipo
        está compuesto por entusiastas de los juegos de mesa que buscan mejorar la
        experiencia de juego para todos.
      </p>
      <p className="text-lg">
        Creemos que los juegos de mesa son una excelente manera de conectar con amigos y
        familiares, y queremos facilitar el proceso de puntuación para que te puedas
        concentrar en disfrutar el juego.
      </p>
    </main>
  );
};

export default AboutPage;
