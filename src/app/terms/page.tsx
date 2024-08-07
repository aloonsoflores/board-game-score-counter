import React from 'react';

const TermsPage: React.FC = () => {
  return (
    <main className="p-6 max-w-4xl mx-auto bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text">
      <h1 className="text-3xl font-bold mb-4">Términos de Servicio</h1>
      <p className="text-lg mb-4">
        Al utilizar Board Game Score Counter, aceptas nuestros términos de servicio. A continuación,
        te proporcionamos detalles sobre nuestros términos.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Uso de la Aplicación</h2>
      <p className="text-lg mb-4">
        La aplicación está destinada a ser utilizada para el cálculo de puntuaciones en juegos de
        mesa. No puedes usar la aplicación para ningún propósito ilegal o no autorizado.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Modificaciones de los Términos</h2>
      <p className="text-lg mb-4">
        Nos reservamos el derecho de modificar estos términos en cualquier momento. Te notificaremos
        sobre los cambios importantes mediante la actualización de esta página.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Limitación de Responsabilidad</h2>
      <p className="text-lg">
        No nos hacemos responsables de ningún daño o pérdida que pueda surgir del uso de la aplicación.
        Utilizas la aplicación bajo tu propio riesgo.
      </p>
    </main>
  );
};

export default TermsPage;
