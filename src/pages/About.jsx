import { FaChurch, FaHeart, FaPray, FaUsers } from "react-icons/fa";

const About = () => {
  const values = [
    {
      icon: FaHeart,
      title: "Amor",
      desc: "Demonstramos o amor de Cristo em tudo que fazemos",
    },
    {
      icon: FaPray,
      title: "Fé",
      desc: "Fundamentados na fé e na palavra de Deus",
    },
    {
      icon: FaUsers,
      title: "Comunidade",
      desc: "Unidos como uma família em Cristo",
    },
    {
      icon: FaChurch,
      title: "Adoração",
      desc: "Dedicados à verdadeira adoração",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#0A1126] via-[#141E3C] to-[#0A1126] text-white min-h-screen pt-20">
      {/* Hero Section */}
      <div className="relative py-20 px-4">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-[0.02]"></div>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Sobre Nossa <span className="text-[#FF6B00]">Igreja</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Uma comunidade dedicada a compartilhar o amor de Cristo e
            transformar vidas através da palavra de Deus.
          </p>
        </div>
      </div>

      {/* Valores */}
      <div className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((item, index) => (
              <div
                key={index}
                className="p-8 rounded-xl bg-white/[0.03] hover:bg-white/[0.05] transition-all duration-300 group"
              >
                <item.icon className="w-12 h-12 text-[#FF6B00] mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* História */}
      <div className="relative py-20 px-4 bg-gradient-to-b from-[#0A1126]/50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">
                Nossa <span className="text-[#FF6B00]">História</span>
              </h2>
              <div className="space-y-6 text-gray-300">
                <p>
                  Fundada em 1990, nossa igreja começou com um pequeno grupo de
                  fiéis dedicados à palavra de Deus.
                </p>
                <p>
                  Ao longo dos anos, crescemos em número e em força espiritual,
                  mantendo sempre nosso compromisso com o evangelho.
                </p>
                <p>
                  Hoje, somos uma comunidade vibrante que continua a crescer e
                  impactar vidas em nossa cidade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
