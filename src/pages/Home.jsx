import {
  FaCross,
  FaHeart,
  FaHandsHelping,
  FaUsers,
  FaPray,
  FaHandHoldingHeart,
  FaGlobe,
  FaWater,
  FaBook,
} from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const Home = () => {
  const { isDark } = useTheme();

  const purposes = [
    {
      icon: FaCross,
      title: "Pregar o Evangelho",
      description:
        "Compartilhando a palavra de Deus e Suas verdades eternas com todos",
    },
    {
      icon: FaHeart,
      title: "Transformar Vidas",
      description:
        "Impactando pessoas através do poder transformador de Cristo",
    },
    {
      icon: FaUsers,
      title: "Viver em Unidade",
      description:
        "Unidos como uma só família em Cristo, crescendo juntos na fé",
    },
    {
      icon: FaHandsHelping,
      title: "Servir com Amor",
      description: "Demonstrando o amor de Deus através do serviço ao próximo",
    },
  ];

  const ministries = [
    {
      icon: FaPray,
      title: "Adoração",
      description:
        "Amar a Deus sobre todas as coisas, em espírito e em verdade",
      highlight: "Amar a Deus",
    },
    {
      icon: FaHandHoldingHeart,
      title: "Ministério",
      description: "Servir ao próximo com amor, compaixão e dedicação",
      highlight: "Amar ao próximo",
    },
    {
      icon: FaGlobe,
      title: "Evangelismo",
      description:
        "Compartilhar o evangelho e fazer discípulos de todas as nações",
      highlight: "Ir e fazer discípulos",
    },
    {
      icon: FaWater,
      title: "Comunhão",
      description:
        "Unidos em Cristo através do batismo e da comunhão fraternal",
      highlight: "Batizar",
    },
    {
      icon: FaBook,
      title: "Discipulado",
      description: "Ensinar e praticar a obediência aos mandamentos de Cristo",
      highlight: "Ensinar a obediência",
    },
  ];

  return (
    <div
      className={`w-full transition-colors duration-300 ${
        isDark ? "bg-[#0A1126] text-gray-100" : "bg-white text-gray-800"
      }`}
    >
      {/* Background com gradiente suave */}
      <div
        className={`fixed inset-0 ${
          isDark
            ? "bg-gradient-to-b from-[#0A1126] via-[#141E3C] to-[#111827] opacity-90"
            : "bg-gradient-to-b from-gray-50 via-white to-gray-100 opacity-80"
        }`}
      ></div>

      <div className="relative">
        {/* Hero Section com transição suave */}
        <div
          className={`relative min-h-screen flex items-center justify-center px-4 ${
            isDark
              ? "bg-gradient-to-b from-transparent via-[#0A1126]/50 to-[#111827]"
              : "bg-transparent"
          }`}
        >
          <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-[0.05]"></div>
          <div className="absolute inset-0 bg-gradient-radial from-[#FF6B00]/5 via-transparent to-transparent"></div>
          <div className="relative z-10 text-center max-w-6xl mx-auto">
            <h1
              className={`text-6xl md:text-8xl font-bold mb-4 leading-tight tracking-tight ${
                isDark ? "text-white" : "text-gray-800"
              }`}
            >
              Bem-vindo à nossa <span className="text-[#FF6B00]">Igreja</span>
            </h1>
            <p
              className={`text-xl mb-12 ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Amar é a marca desse ministério
            </p>
            <button className="bg-gradient-to-r from-[#FF6B00] to-[#ff8534] text-white px-16 py-5 rounded-lg hover:from-[#ff8534] hover:to-[#FF6B00] transition-all duration-300 transform hover:scale-105 shadow-2xl font-medium text-lg uppercase tracking-wider">
              Participe de um Culto
            </button>
          </div>
        </div>

        {/* Purposes Section com ajuste na transição */}
        <div
          className={`relative ${
            isDark
              ? "bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#0F172A]"
              : "bg-gradient-to-b from-gray-50 via-gray-100 to-white"
          }`}
        >
          <div className="container mx-auto px-4 py-24">
            <div className="text-center mb-16">
              <span className="text-[#FF6B00] uppercase tracking-[0.2em] text-sm font-medium mb-4 block">
                Nossos Propósitos
              </span>
              <h2
                className={`text-4xl md:text-5xl font-bold ${
                  isDark ? "text-white" : "text-gray-800"
                }`}
              >
                Chamados para <span className="text-[#FF6B00]">Servir</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {purposes.map((purpose, index) => (
                <div
                  key={index}
                  className={`group p-8 rounded-xl transition-all duration-500 ${
                    isDark
                      ? "bg-[#1F2937] hover:bg-[#374151] border-gray-700"
                      : "bg-white hover:shadow-xl border-gray-100"
                  } border hover:-translate-y-1`}
                >
                  <div className="flex flex-col items-center text-center">
                    <purpose.icon className="w-12 h-12 text-[#FF6B00] mb-6 group-hover:scale-110 transition-transform duration-300" />
                    <h3
                      className={`text-xl font-bold mb-4 ${
                        isDark ? "text-gray-100" : "text-gray-800"
                      } group-hover:text-[#FF6B00]`}
                    >
                      {purpose.title}
                    </h3>
                    <p className={isDark ? "text-gray-300" : "text-gray-600"}>
                      {purpose.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Ministries Section com gradiente ajustado */}
        <div
          className={`relative ${
            isDark
              ? "bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#111827]"
              : "bg-gradient-to-b from-white via-gray-50 to-gray-100"
          }`}
        >
          <div className="container mx-auto px-4 py-24">
            <div className="text-center mb-16">
              <span className="text-[#FF6B00] uppercase tracking-[0.2em] text-sm font-medium mb-4 block">
                Nossos Ministérios
              </span>
              <h2
                className={`text-4xl md:text-5xl font-bold ${
                  isDark ? "text-white" : "text-gray-800"
                }`}
              >
                Os Cinco <span className="text-[#FF6B00]">Pilares</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
              {ministries.map((ministry, index) => (
                <div
                  key={index}
                  className={`group p-8 rounded-xl transition-all duration-500 ${
                    isDark
                      ? "bg-[#1E293B] hover:bg-[#334155] border-gray-700"
                      : "bg-gray-50 hover:bg-white border-gray-100"
                  } border hover:-translate-y-1`}
                >
                  <div className="flex flex-col items-center text-center">
                    <ministry.icon className="w-12 h-12 text-[#FF6B00] mb-6 group-hover:scale-110 transition-transform duration-300" />
                    <h3
                      className={`text-xl font-bold mb-4 transition-colors duration-300 ${
                        isDark
                          ? "text-white group-hover:text-[#FF6B00]"
                          : "text-gray-800 group-hover:text-[#FF6B00]"
                      }`}
                    >
                      {ministry.title}
                    </h3>
                    <span className="text-sm text-[#FF6B00] font-medium mb-3">
                      {ministry.highlight}
                    </span>
                    <p
                      className={`text-sm leading-relaxed ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {ministry.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Service Times Section harmonizado com o Footer */}
        <div
          className={`relative ${
            isDark
              ? "bg-gradient-to-b from-[#111827] to-[#11182c]"
              : "bg-gradient-to-b from-gray-100 to-gray-50"
          }`}
        >
          <div className="container mx-auto px-4 py-24">
            <div className="flex flex-col items-center mb-16">
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#FF6B00] to-transparent mb-16 opacity-50"></div>
              <span className="text-[#FF6B00] uppercase tracking-[0.2em] text-sm font-medium mb-4">
                Nossos Horários
              </span>
              <h2
                className={`text-4xl md:text-5xl font-bold text-center ${
                  isDark ? "text-white" : "text-gray-800"
                }`}
              >
                Horários dos <span className="text-[#FF6B00]">Cultos</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {[
                {
                  day: "Domingo",
                  times: ["18:00 - 20:00 - Culto com a Família"],
                },
                {
                  day: "Segunda-feira",
                  times: [
                    "19:30 - 20:00 - Intercessão",
                    "20:00 - 21:00 - Estudo Bíblico",
                  ],
                },
                {
                  day: "Quarta-feira",
                  times: ["19:30 - 21:00 - Culto de Propósitos"],
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className={`text-center p-10 rounded-xl transition-all duration-500 group hover:-translate-y-1 ${
                    isDark
                      ? "bg-[#1F2937] hover:bg-[#374151] border-gray-700"
                      : "bg-white border-gray-100 hover:shadow-xl"
                  } border`}
                >
                  <div className="relative">
                    <h3 className="text-2xl font-bold mb-6 text-[#FF6B00] group-hover:scale-110 transition-transform duration-300">
                      {service.day}
                    </h3>
                    {service.times.map((time, idx) => (
                      <p
                        key={idx}
                        className={`text-lg mb-3 transition-colors duration-300 ${
                          isDark
                            ? "text-gray-300 hover:text-gray-100"
                            : "text-gray-600 hover:text-gray-800"
                        }`}
                      >
                        {time}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
