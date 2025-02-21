import {
  FaHandHoldingHeart,
  FaMoneyBillWave,
  FaCreditCard,
  FaQrcode,
} from "react-icons/fa";

const Donations = () => {
  return (
    <div className="bg-gradient-to-b from-[#0A1126] via-[#141E3C] to-[#0A1126] text-white min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-[#FF6B00]">Doações</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Sua contribuição nos ajuda a continuar nosso trabalho e impactar
            mais vidas.
          </p>
        </div>

        {/* Métodos de Doação */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: FaQrcode,
              title: "PIX",
              info: "Chave PIX: cristoliberta@oul.com.br",
            },
          ].map((method, index) => (
            <div
              key={index}
              className="bg-white/[0.03] p-8 rounded-xl hover:bg-white/[0.05] transition-all duration-300"
            >
              <method.icon className="w-12 h-12 text-[#FF6B00] mb-6" />
              <h3 className="text-xl font-bold mb-4">{method.title}</h3>
              <p className="text-gray-400 whitespace-pre-line">{method.info}</p>
            </div>
          ))}
        </div>

        {/* Seção de Impacto */}
        <div className="bg-white/[0.03] rounded-xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Seu Impacto na{" "}
                <span className="text-[#FF6B00]">Comunidade</span>
              </h2>
              <p className="text-gray-300 mb-8">
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
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
                <img
                  src="https://via.placeholder.com/800x600"
                  alt="Impacto Social"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donations;
