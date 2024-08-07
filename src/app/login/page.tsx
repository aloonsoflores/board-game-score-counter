"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Button from '@/components/common/Button';
import TextInput from '@/components/common/TextInput';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de inicio de sesión
  };

  return (
    <main className="flex justify-center items-center min-h-screen bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text p-4">
      <div className="w-full max-w-md p-8 bg-light-cardBg dark:bg-dark-cardBg rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Inicia Sesión</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Correo Electrónico
            </label>
            <TextInput
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingrese su correo electrónico"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Contraseña
            </label>
            <TextInput
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingrese su contraseña"
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Iniciar Sesión
          </Button>
        </form>
        <p className="mt-6 text-center">
          ¿No tienes una cuenta?{' '}
          <Link href="/signup" className="text-accent hover:underline">
            Regístrate
          </Link>
        </p>
      </div>
    </main>
  );
};

export default LoginPage;
