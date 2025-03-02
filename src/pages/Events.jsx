import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useTheme } from "../context/ThemeContext";

const events = [
  {
    name: "Chá de Mulheres",
    date: "2025-03-10",
    description: "Evento especial para todas as mulheres da comunidade.",
    path: "/eventos/cha-de-mulheres",
  },
  // Adicione mais eventos aqui
];

const Events = () => {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen ${isDark ? "bg-[#0A1126] text-white" : "bg-white text-gray-800"} transition-colors duration-300`}>
      <Navbar />
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-[#FF6B00] via-[#ff8534] to-[#FF6B00] text-transparent bg-clip-text tracking-wide">
            Eventos
          </span>
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <Link
              key={index}
              to={event.path}
              className={`block p-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1 border ${isDark ? "bg-[#1E293B] hover:bg-[#2D3B4E] border-white/10" : "bg-white hover:bg-gray-50 border-gray-200"} shadow-lg hover:shadow-xl`}
            >
              <h2 className="text-2xl font-bold mb-3 text-[#FF6B00]">{event.name}</h2>
              <p className="text-lg mb-2">{event.date}</p>
              <p className="text-lg">{event.description}</p>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Events;