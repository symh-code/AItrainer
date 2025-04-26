// src/app/chat/page.jsx
"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function ChatPage() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "ai",
      content:
        "¡Hola! Soy AITRAINER. ¿En qué puedo ayudarte hoy con tu entrenamiento?",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const messagesEndRef = useRef(null);

  // Colores de la marca (consistentes con la página principal)
  const colors = {
    primary: "#F07762",
    secondary: "#C77F73",
    accent: "#9B7973",
    dark: "#49332F",
    neutral: "#706664",
  };

  // Para el scroll automático hacia abajo cuando hay nuevos mensajes
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputMessage.trim() === "") return;

    // Añadir el mensaje del usuario
    const newUserMessage = {
      id: messages.length + 1,
      sender: "user",
      content: inputMessage,
    };

    setMessages([...messages, newUserMessage]);
    setInputMessage("");

    // Simular respuesta de la IA después de un breve delay
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        sender: "ai",
        content:
          "¡Gracias por tu mensaje! Como tu entrenador personal AI, estoy analizando tus objetivos para crear el mejor plan de entrenamiento para ti.",
      };
      setMessages((prevMessages) => [...prevMessages, aiResponse]);
    }, 1000);
  };

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "#FAF7F6" }}
    >
      {/* Navbar - Consistente con la página principal */}
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
              <Link href="/" className="flex-shrink-0">
                <span
                  style={{ color: colors.primary }}
                  className="text-xl font-bold"
                >
                  AITRAINER
                </span>
              </Link>
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
          </div>
        </div>
      </nav>

      {/* Contenido principal - espacio para el navbar */}
      <div className="pt-16 flex-grow flex flex-col">
        {/* Sección superior con las dos imágenes con bordes naranjas */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 p-8">
          {/* Primera imagen con borde naranja y foto circular */}
          <div
            className="relative w-full max-w-sm h-64 rounded-lg p-4 flex items-center justify-center"
            style={{
              border: `3px solid ${colors.primary}`,
              backgroundColor: "white",
            }}
          >
            {/* Foto circular en el centro */}
            <div
              className="absolute w-24 h-24 rounded-full overflow-hidden border-4"
              style={{ borderColor: colors.primary }}
            >
              <img
                src="/api/placeholder/96/96"
                alt="Usuario"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Texto "Tú" debajo de la imagen */}
            <div className="absolute bottom-4 text-center">
              <span style={{ color: colors.dark }} className="font-medium">
                Tú
              </span>
            </div>
          </div>

          {/* Segunda imagen con borde naranja y foto circular (AITRAINER) */}
          <div
            className="relative w-full max-w-sm h-64 rounded-lg p-4 flex items-center justify-center"
            style={{
              border: `3px solid ${colors.primary}`,
              backgroundColor: "white",
            }}
          >
            {/* Foto circular en el centro */}
            <div
              className="absolute w-24 h-24 rounded-full overflow-hidden border-4"
              style={{ borderColor: colors.primary }}
            >
              <div
                className="w-full h-full bg-gray-200 flex items-center justify-center"
                style={{ backgroundColor: `${colors.primary}20` }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  style={{ color: colors.primary }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>

            {/* Texto "AITRAINER" debajo de la imagen */}
            <div className="absolute bottom-4 text-center">
              <span style={{ color: colors.dark }} className="font-medium">
                AITRAINER
              </span>
            </div>
          </div>
        </div>

        {/* Sección de chat */}
        <div className="flex-grow flex flex-col mt-4 p-4 max-w-4xl mx-auto w-full">
          {/* Mensajes del chat */}
          <div
            className="flex-grow bg-white rounded-lg p-4 mb-4 overflow-y-auto shadow-md"
            style={{ maxHeight: "calc(100vh - 400px)", minHeight: "300px" }}
          >
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-xs md:max-w-md lg:max-w-lg rounded-lg px-4 py-2 ${
                      message.sender === "user"
                        ? "bg-blue-100 text-blue-900"
                        : "bg-orange-100 text-orange-900"
                    }`}
                    style={{
                      backgroundColor:
                        message.sender === "user"
                          ? "#E6F7FF"
                          : `${colors.primary}20`,
                      color:
                        message.sender === "user" ? "#0057B8" : colors.dark,
                    }}
                  >
                    <p>{message.content}</p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Formulario de entrada de mensajes */}
          <form onSubmit={handleSendMessage} className="flex space-x-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              className="flex-grow rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-opacity-50"
              style={{ focusRing: colors.primary }}
              placeholder="Escribe tu mensaje aquí..."
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-md text-white transition-all hover:opacity-90 shadow-sm"
              style={{ backgroundColor: colors.primary }}
            >
              Enviar
            </button>
          </form>

          {/* Botón para iniciar llamada */}
          <div className="mt-6 text-center">
            <button
              className="px-6 py-3 rounded-md text-white font-medium transition-all hover:opacity-90 shadow-md flex items-center justify-center mx-auto space-x-2"
              style={{ backgroundColor: colors.primary }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>Iniciar Llamada</span>
            </button>
          </div>
        </div>
      </div>

      {/* Footer - igual que en la página principal */}
      <footer style={{ backgroundColor: colors.dark }}>
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex justify-center md:justify-start">
              <span className="text-xl font-bold text-white">AITRAINER</span>
            </div>
            <div className="mt-4 md:mt-0 flex flex-col items-center md:items-end">
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
