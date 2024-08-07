import React from 'react';
import Link from 'next/link';
import Button from '@/components/common/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faSave, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const LandingPage: React.FC = () => {
  return (
    <div className="bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text min-h-screen flex flex-col">

      {/* Hero Section */}
      <section className="flex-grow flex flex-col items-center justify-center text-center p-6 bg-light-cardBg dark:bg-dark-cardBg">
        <h1 className="text-4xl font-bold mb-4">Cuenta las Puntuaciones de tus Juegos de Mesa de Forma Fácil</h1>
        <p className="text-lg mb-6">Nuestra aplicación te ayuda a llevar el control de puntuaciones para una variedad de juegos de mesa. Rápida, fácil y eficiente.</p>
        <Button>
          <Link href="/signup">Empieza Ahora</Link>
        </Button>
        <div className="mt-6">
          <img src="/images/hero-image.png" alt="Board Game Score Counter" className="w-full max-w-md" />
        </div>
      </section>

      {/* Features Section */}
      <section className="p-6 bg-light-background dark:bg-dark-background">
        <h2 className="text-3xl font-bold mb-4 text-center">Características Clave</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="p-4 bg-light-cardBg dark:bg-dark-cardBg rounded-lg shadow-md text-center">
            <FontAwesomeIcon icon={faGamepad} className="w-12 h-12 mx-auto mb-4 text-accent" />
            <h3 className="text-xl font-semibold mb-2">Fácil de Usar</h3>
            <p className="text-lg">Interfaz intuitiva y sencilla que te permite calcular puntuaciones de juegos de mesa sin complicaciones.</p>
          </div>
          {/* Feature 2 */}
          <div className="p-4 bg-light-cardBg dark:bg-dark-cardBg rounded-lg shadow-md text-center">
            <FontAwesomeIcon icon={faSave} className="w-12 h-12 mx-auto mb-4 text-accent" />
            <h3 className="text-xl font-semibold mb-2">Guardar y Continuar</h3>
            <p className="text-lg">Regístrate para guardar puntuaciones, retomar juegos más tarde y acceder a tus resultados anteriores.</p>
          </div>
          {/* Feature 3 */}
          <div className="p-4 bg-light-cardBg dark:bg-dark-cardBg rounded-lg shadow-md text-center">
            <FontAwesomeIcon icon={faInfoCircle} className="w-12 h-12 mx-auto mb-4 text-accent" />
            <h3 className="text-xl font-semibold mb-2">Conocer Nuevos Juegos</h3>
            <p className="text-lg">Descubre de qué trata un juego antes de jugarlo, con descripciones detalladas y reglas básicas.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="p-6 bg-light-background dark:bg-dark-background">
        <h2 className="text-3xl font-bold mb-4 text-center">Lo Que Dicen Nuestros Usuarios</h2>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:space-x-6">
            {/* Testimonial 1 */}
            <div className="p-4 bg-light-cardBg dark:bg-dark-cardBg rounded-lg shadow-md mb-4 md:mb-0 text-center">
              <p className="text-lg mb-2">"¡Esta aplicación ha transformado la forma en que jugamos! Es fácil de usar y muy eficiente."</p>
              <p className="font-semibold">Juan Pérez</p>
            </div>
            {/* Testimonial 2 */}
            <div className="p-4 bg-light-cardBg dark:bg-dark-cardBg rounded-lg shadow-md text-center">
              <p className="text-lg mb-2">"Una herramienta imprescindible para cualquier amante de los juegos de mesa. ¡La recomiendo al 100%!"</p>
              <p className="font-semibold">Ana Gómez</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="p-6 bg-light-accent dark:bg-dark-accent text-light-text dark:text-dark-text text-center">
        <h2 className="text-3xl font-bold mb-4">Listo para Empezar?</h2>
        <p className="text-lg mb-6">Únete a nosotros y comienza a disfrutar de una experiencia de juego mejorada hoy mismo.</p>
        <Button>
          <Link href="/signup">Regístrate Ahora</Link>
        </Button>
      </section>
    </div>
  );
};

export default LandingPage;
