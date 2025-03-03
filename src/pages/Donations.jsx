import {
  FaHandHoldingHeart,
  FaMoneyBillWave,
  FaCreditCard,
  FaQrcode,
} from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

const Donations = () => {
  const { isDark } = useTheme();

  return (
    <div
      className={`min-h-screen pt-20 ${
        isDark
          ? "bg-[#0A1126] text-white"
          : "bg-gradient-to-b from-gray-50 via-white to-gray-50 text-gray-800"
      } transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 py-20">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-[#FF6B00]">Doações</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Sua contribuição nos ajuda a continuar nosso trabalho e impactar
            mais vidas.
          </p>
        </motion.div>

        {/* Métodos de Doação */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: FaQrcode,
              title: "PIX",
              info: "Chave PIX: cristoliberta@oul.com.br",
            },
          ].map((method, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-[#13213d] dark:border-[#18294e] p-8 rounded-xl shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <method.icon className="w-12 h-12 text-[#FF6B00] mb-6" />
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                {method.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
                {method.info}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Seção de Impacto */}
        <motion.div 
          className="bg-white dark:bg-[#13213d] rounded-xl p-8 md:p-12 shadow-lg border border-gray-100 dark:border-[#18294e]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">
                Seu Impacto na{" "}
                <span className="text-[#FF6B00]">Comunidade</span>
              </h2>
              <p className="text-gray-600 mb-8 dark:text-gray-300">
                Suas doações nos ajudam a manter nossos projetos sociais e
                alcançar mais pessoas com a mensagem de Cristo.
              </p>
              <div className="space-y-4">
                {[
                  "Auxílio a famílias necessitadas",
                  "Manutenção do templo",
                  "Projetos sociais",
                  "Evangelização",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <FaHandHoldingHeart className="text-[#FF6B00]" />
                    <span className="text-gray-600 dark:text-gray-200">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Donations;
