"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Button from '@/components/common/Button';
import TextInput from '@/components/common/TextInput';

const RegisterPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de registro
  };

  return (
    <main className="flex justify-center items-center min-h-screen bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text p-4">
      <div className="w-full max-w-md p-8 bg-light-cardBg dark:bg-dark-cardBg rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Regístrate</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium mb-1">
              Nombre de Usuario
            </label>
            <TextInput
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Ingrese su nombre de usuario"
              required
            />
          </div>
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
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">
              Confirmar Contraseña
            </label>
            <TextInput
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirme su contraseña"
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Registrarse
          </Button>
        </form>
        <p className="mt-6 text-center">
          ¿Ya tienes una cuenta?{' '}
          <Link href="/signin" className="text-accent hover:underline">
            Inicia Sesión
          </Link>
        </p>
      </div>
    </main>
  );
};

export default RegisterPage;
