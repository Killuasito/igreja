import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gradient-to-b from-[#0A1126] via-[#141E3C] to-[#0A1126] text-white min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Entre em <span className="text-[#FF6B00]">Contato</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Estamos aqui para ajudar. Entre em contato conosco.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Formulário */}
          <div className="bg-white/[0.03] p-8 rounded-xl">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/[0.03] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/50 transition-all border border-white/5"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/[0.03] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/50 transition-all border border-white/5"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Mensagem
                </label>
                <textarea
                  rows="5"
                  className="w-full px-4 py-3 bg-white/[0.03] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/50 transition-all border border-white/5"
                  placeholder="Sua mensagem..."
                ></textarea>
              </div>
              <button className="w-full py-4 bg-gradient-to-r from-[#FF6B00] to-[#FF8533] rounded-lg hover:from-[#FF8533] hover:to-[#FF6B00] transition-all duration-300 font-medium">
                Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Informações de Contato */}
          <div className="space-y-8">
            {[
              {
                icon: FaMapMarkerAlt,
                title: "Endereço",
                info: "Estr. Victor's, 360 - Recanto dos Victor's, Cotia - SP, 06717-230",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-6 p-6 bg-white/[0.03] rounded-xl hover:bg-white/[0.05] transition-all duration-300"
              >
                <div className="p-4 bg-[#FF6B00]/10 rounded-lg">
                  <item.icon className="w-6 h-6 text-[#FF6B00]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.info}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
