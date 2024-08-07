import React from 'react';

const PrivacyPage: React.FC = () => {
  return (
    <main className="p-6 max-w-4xl mx-auto bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text">
      <h1 className="text-3xl font-bold mb-4">Política de Privacidad</h1>
      <p className="text-lg mb-4">
        En Board Game Score Counter, valoramos tu privacidad y nos comprometemos a proteger
        la información personal que compartes con nosotros. A continuación, te proporcionamos
        detalles sobre nuestra política de privacidad.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Información que Recopilamos</h2>
      <p className="text-lg mb-4">
        Recopilamos información que proporcionas directamente, como tu nombre y dirección de
        correo electrónico, cuando utilizas nuestra aplicación. También podemos recopilar
        información sobre tu uso de la aplicación para mejorar nuestra oferta.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Cómo Utilizamos tu Información</h2>
      <p className="text-lg mb-4">
        Utilizamos tu información para proporcionarte una experiencia personalizada y para
        mejorar nuestras funcionalidades. No compartimos tu información personal con terceros
        sin tu consentimiento.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Tus Derechos</h2>
      <p className="text-lg">
        Tienes derecho a acceder, corregir y eliminar la información que tenemos sobre ti. Si
        deseas ejercer estos derechos, por favor contáctanos a través de nuestra página de
        contacto.
      </p>
    </main>
  );
};

export default PrivacyPage;
