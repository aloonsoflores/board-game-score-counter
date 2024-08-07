import React from 'react';

const HelpPage: React.FC = () => {
  return (
    <main className="p-6 max-w-4xl mx-auto bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text">
      <h1 className="text-3xl font-bold mb-4">Ayuda</h1>
      <p className="text-lg mb-4">
        Bienvenido a la sección de ayuda de Board Game Score Counter. Aquí encontrarás
        instrucciones sobre cómo usar nuestra aplicación para calcular puntuaciones en tus
        juegos de mesa favoritos.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Cómo usar la aplicación</h2>
      <p className="text-lg mb-4">
        1. Selecciona el juego de mesa que estás jugando.
        2. Ingresa el número de jugadores y cualquier otra información relevante.
        3. La aplicación calculará automáticamente las puntuaciones basadas en las reglas
        del juego que hayas seleccionado.
      </p>
      <h2 className="text-2xl font-semibold mb-2">¿Necesitas más ayuda?</h2>
      <p className="text-lg">
        Si tienes alguna pregunta adicional o necesitas soporte, no dudes en contactarnos a
        través de nuestro formulario de contacto en la página de inicio.
      </p>
    </main>
  );
};

export default HelpPage;
