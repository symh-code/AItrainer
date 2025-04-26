// src/app/page.jsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Colores de la marca
  const colors = {
    primary: "#F07762",
    secondary: "#C77F73",
    accent: "#9B7973",
    dark: "#49332F",
    neutral: "#706664",
  };

  // Datos de ejemplo para los programas generados
  const featuredPrograms = [
    {
      id: 1,
      title: "Plan de Entrenamiento para Principiantes",
      description:
        "Un programa de 8 semanas diseñado para personas que están comenzando su viaje fitness.",
      image: "/api/placeholder/300/200",
      author: "AITRAINER",
    },
    {
      id: 2,
      title: "Rutina de Hipertrofia Avanzada",
      description:
        "Programa especializado en el crecimiento muscular para atletas experimentados.",
      image: "/api/placeholder/300/200",
      author: "AITRAINER",
    },
    {
      id: 3,
      title: "Plan de Pérdida de Peso Saludable",
      description:
        "Combina entrenamiento y nutrición para una pérdida de peso sostenible.",
      image: "/api/placeholder/300/200",
      author: "AITRAINER",
    },
  ];

  // Datos de ejemplo para los testimonios
  const testimonials = [
    {
      id: 1,
      name: "Carlos Rodríguez",
      role: "Entrenador Personal",
      content:
        "AITRAINER ha revolucionado la forma en que creo programas para mis clientes. Ahorro horas de trabajo y los resultados son increíbles.",
      avatar: "/api/placeholder/64/64",
    },
    {
      id: 2,
      name: "María González",
      role: "Atleta Amateur",
      content:
        "Nunca había tenido un plan tan personalizado. Me encanta cómo la IA adapta mi rutina según mi progreso semanal.",
      avatar: "/api/placeholder/64/64",
    },
    {
      id: 3,
      name: "Juan Pérez",
      role: "Propietario de Gimnasio",
      content:
        "Implementamos AITRAINER en nuestro gimnasio y la satisfacción de nuestros miembros ha aumentado significativamente.",
      avatar: "/api/placeholder/64/64",
    },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAF7F6" }}>
      {/* Navbar - Arreglado para tener el logo a la izquierda y los enlaces a la derecha */}
      <nav
        style={{
          backgroundColor: "#FFFFFF",
          boxShadow: "0 2px 10px rgba(73, 51, 47, 0.08)",
        }}
        className="fixed w-full z-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo AITRAINER alineado a la izquierda */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span
                  style={{ color: colors.primary }}
                  className="text-xl font-bold"
                >
                  AITRAINER
                </span>
              </div>
            </div>

            {/* Nav Links a la derecha */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="/"
                style={{ color: colors.dark }}
                className="px-3 py-2 text-sm font-medium hover:opacity-80"
              >
                Home
              </Link>
              <Link
                href="/generate"
                style={{ color: colors.dark }}
                className="px-3 py-2 text-sm font-medium hover:opacity-80"
              >
                Generate
              </Link>
              <Link
                href="/signup"
                style={{ backgroundColor: colors.primary, color: "white" }}
                className="px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-all shadow-sm"
              >
                Get Started
              </Link>

              {/* User profile */}
              <div className="ml-2 flex items-center">
                <button className="p-1 rounded-full focus:outline-none">
                  <div
                    className="h-8 w-8 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: colors.accent, opacity: 0.2 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                      style={{ color: colors.dark }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
                style={{ color: colors.neutral }}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}
          style={{
            backgroundColor: "#FFF",
            borderTop: "1px solid rgba(73, 51, 47, 0.1)",
          }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              style={{ color: colors.primary }}
              className="block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              href="/generate"
              style={{ color: colors.dark }}
              className="block px-3 py-2 rounded-md text-base font-medium hover:opacity-80"
            >
              Generate
            </Link>
            <Link
              href="/signup"
              style={{ backgroundColor: colors.primary, color: "white" }}
              className="block mt-2 px-3 py-2 rounded-md text-base font-medium text-center"
            >
              Get Started
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <div
                  className="h-10 w-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: colors.accent, opacity: 0.2 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                    style={{ color: colors.dark }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                </div>
              </div>
              <div className="ml-3">
                <div
                  className="text-base font-medium"
                  style={{ color: colors.dark }}
                >
                  Perfil
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section - Con más padding para crear más espacio */}
        <section
          style={{
            backgroundImage: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.dark} 100%)`,
          }}
          className="pt-32 pb-24 md:pt-40 md:pb-32"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 text-center md:text-left text-white mb-10 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                  Entrenamiento personalizado con IA
                </h1>
                <p className="mt-6 text-lg md:text-xl opacity-90">
                  Crea planes de entrenamiento personalizados en segundos con la
                  ayuda de inteligencia artificial avanzada.
                </p>
                <div className="mt-10">
                  <Link
                    href="/chat"
                    style={{ backgroundColor: "white", color: colors.primary }}
                    className="px-8 py-3 rounded-md text-lg font-medium hover:opacity-90 transition-all shadow-lg inline-block"
                  >
                    Hablar con AITRAINER
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="aspect-w-16 aspect-h-9 relative rounded-lg shadow-2xl overflow-hidden">
                  <img
                    src="/api/placeholder/600/400"
                    alt="AITRAINER Demo"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section - Más padding vertical */}
        <section className="py-24" style={{ backgroundColor: "white" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2
                className="text-3xl font-extrabold"
                style={{ color: colors.dark }}
              >
                Tu Entrenador Personal Inteligente
              </h2>
              <p
                className="mt-6 max-w-2xl mx-auto text-xl"
                style={{ color: colors.neutral }}
              >
                Descubre cómo AITRAINER puede transformar tu enfoque de
                entrenamiento
              </p>
            </div>

            <div className="mt-16">
              <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
                <div
                  className="rounded-lg p-8 shadow-md transition-all hover:shadow-lg"
                  style={{
                    backgroundColor: "#FFF",
                    border: `1px solid rgba(155, 121, 115, 0.1)`,
                  }}
                >
                  <div
                    className="rounded-md p-3 inline-block"
                    style={{ backgroundColor: `${colors.primary}20` }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      style={{ color: colors.primary }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3
                    className="mt-5 text-lg font-medium"
                    style={{ color: colors.dark }}
                  >
                    Planes personalizados
                  </h3>
                  <p className="mt-3" style={{ color: colors.neutral }}>
                    Genera planes adaptados a tus objetivos, nivel de
                    experiencia y equipamiento disponible.
                  </p>
                </div>

                <div
                  className="rounded-lg p-8 shadow-md transition-all hover:shadow-lg"
                  style={{
                    backgroundColor: "#FFF",
                    border: `1px solid rgba(155, 121, 115, 0.1)`,
                  }}
                >
                  <div
                    className="rounded-md p-3 inline-block"
                    style={{ backgroundColor: `${colors.primary}20` }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      style={{ color: colors.primary }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <h3
                    className="mt-5 text-lg font-medium"
                    style={{ color: colors.dark }}
                  >
                    Seguimiento de progreso
                  </h3>
                  <p className="mt-3" style={{ color: colors.neutral }}>
                    La IA ajusta tu plan en función de tus avances y rendimiento
                    semanal.
                  </p>
                </div>

                <div
                  className="rounded-lg p-8 shadow-md transition-all hover:shadow-lg"
                  style={{
                    backgroundColor: "#FFF",
                    border: `1px solid rgba(155, 121, 115, 0.1)`,
                  }}
                >
                  <div
                    className="rounded-md p-3 inline-block"
                    style={{ backgroundColor: `${colors.primary}20` }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      style={{ color: colors.primary }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3
                    className="mt-5 text-lg font-medium"
                    style={{ color: colors.dark }}
                  >
                    Ahorra tiempo
                  </h3>
                  <p className="mt-3" style={{ color: colors.neutral }}>
                    Genera rutinas de entrenamiento completas en segundos, no en
                    horas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Programas Generados Section - Más espacio */}
        <section className="py-24" style={{ backgroundColor: "#FAF7F6" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2
                className="text-3xl font-extrabold"
                style={{ color: colors.dark }}
              >
                Programas Generados
              </h2>
              <p
                className="mt-6 max-w-2xl mx-auto text-xl"
                style={{ color: colors.neutral }}
              >
                Explora algunos de los planes de entrenamiento creados con
                nuestra plataforma
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {featuredPrograms.map((program) => (
                <div
                  key={program.id}
                  className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white transition-all hover:shadow-xl"
                >
                  <div className="flex-shrink-0 relative">
                    <img
                      className="h-48 w-full object-cover"
                      src={program.image}
                      alt={program.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black opacity-40"></div>
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <h3
                        className="text-xl font-semibold"
                        style={{ color: colors.dark }}
                      >
                        {program.title}
                      </h3>
                      <p
                        className="mt-3 text-base"
                        style={{ color: colors.neutral }}
                      >
                        {program.description}
                      </p>
                    </div>
                    <div className="mt-6">
                      <p
                        className="text-sm font-medium"
                        style={{ color: colors.neutral }}
                      >
                        Generado por {program.author}
                      </p>
                      <Link
                        href="#"
                        style={{
                          backgroundColor: colors.primary,
                          color: "white",
                        }}
                        className="mt-3 block text-center px-4 py-2 border border-transparent text-sm font-medium rounded-md transition-all hover:opacity-90"
                      >
                        Ver detalles
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section - Más espacio */}
        <section className="py-24" style={{ backgroundColor: "white" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2
                className="text-3xl font-extrabold"
                style={{ color: colors.dark }}
              >
                Lo que dicen nuestros usuarios
              </h2>
              <p
                className="mt-6 max-w-2xl mx-auto text-xl"
                style={{ color: colors.neutral }}
              >
                Testimonios de entrenadores y atletas que han revolucionado su
                entrenamiento
              </p>
            </div>

            <div className="mt-16 space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="rounded-lg p-8 shadow-md transition-all hover:shadow-lg"
                  style={{
                    backgroundColor: "#FFF",
                    border: `1px solid rgba(155, 121, 115, 0.1)`,
                  }}
                >
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-12 w-12 rounded-full"
                        src={testimonial.avatar}
                        alt={testimonial.name}
                      />
                    </div>
                    <div className="ml-4">
                      <h3
                        className="text-lg font-medium"
                        style={{ color: colors.dark }}
                      >
                        {testimonial.name}
                      </h3>
                      <p className="text-sm" style={{ color: colors.neutral }}>
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <p className="italic" style={{ color: colors.neutral }}>
                      "{testimonial.content}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Más espacio */}
        <section className="py-24" style={{ backgroundColor: colors.primary }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-white">
                Comienza tu viaje fitness hoy
              </h2>
              <p className="mt-6 max-w-2xl mx-auto text-xl text-white opacity-90">
                Prueba AITRAINER y transforma tu forma de entrenar
              </p>
              <div className="mt-10 flex justify-center">
                <Link
                  href="/chat"
                  style={{ backgroundColor: "white", color: colors.primary }}
                  className="px-8 py-3 rounded-md text-lg font-medium hover:opacity-90 transition-all shadow-lg"
                >
                  Hablar con AITRAINER
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Añadido nombre del autor */}
      <footer style={{ backgroundColor: colors.dark }}>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex justify-center md:justify-start">
              <span className="text-xl font-bold text-white">AITRAINER</span>
            </div>
            <div className="mt-8 md:mt-0 flex flex-col items-center md:items-end">
              <p className="text-center md:text-right text-base text-white opacity-70">
                &copy; 2025 AITRAINER. Todos los derechos reservados.
              </p>
              <p className="text-center md:text-right text-sm text-white opacity-70 mt-1">
                Desarrollado por Simon Arturo Bobadila Miranda
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
