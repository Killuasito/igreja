<<<<<<< HEAD
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

const Events = () => {
  const { isDark } = useTheme();

  const events = [
    {
      date: "29 de Março",
      title: "Culto das Mulheres",
      description: "Venha celebrar este culto abençoado conosco.",
    },
  ];

  return (
    <div
      className={`min-h-screen pt-20 ${
        isDark
          ? "bg-[#0A1126] text-white"
          : "bg-gradient-to-b from-gray-50 via-white to-gray-50 text-gray-800"
      } transition-colors duration-300`}
    >
      <div className="relative py-20 px-4">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-[0.05]"></div>
        <motion.div 
          className="max-w-7xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1
            className={`text-5xl md:text-6xl font-bold mb-6 ${
              isDark ? "text-white" : "text-gray-800"
            }`}
          >
            Próximos <span className="text-[#FF6B00]">Eventos</span>
          </h1>
          <motion.p
            className={`text-xl max-w-3xl mx-auto leading-relaxed ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Fique por dentro dos nossos próximos eventos e participe conosco.
          </motion.p>
        </motion.div>
      </div>

      <div className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {events.map((event, index) => (
              <motion.div
                key={index}
                className={`p-8 rounded-xl transition-all duration-300 group ${
                  isDark
                    ? "bg-[#141E3C] hover:bg-[#0A1126] border-white/10"
                    : "bg-white hover:shadow-xl border-gray-100"
                } border`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index + 0.3, duration: 0.5 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <h3
                  className={`text-2xl font-bold mb-4 ${
                    isDark ? "text-white" : "text-gray-800"
                  }`}
                >
                  {event.title}
                </h3>
                <span className="text-sm text-[#FF6B00] font-medium mb-3 block">
                  {event.date}
                </span>
                <p className={isDark ? "text-gray-400" : "text-gray-600"}>
                  {event.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
=======
const Events = () => {
  return (
    <div>
      <h1>Eventos</h1>
      <p>Bem-vindo à página de eventos!</p>
>>>>>>> 5f952303f877eb762dfb26a151c964a409e3be39
    </div>
  );
};

export default Events;
