import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaChurch,
} from "react-icons/fa";

const Footer = () => {
  const quickLinks = [
    { name: "Início", path: "/" },
    { name: "Sobre", path: "/sobre" },
    { name: "Eventos", path: "/eventos" },
    { name: "Contato", path: "/contato" },
    { name: "Doações", path: "/doacoes" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#0A1126] via-[#141E3C] to-[#0A1126] text-white">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF6B00] to-transparent opacity-30"></div>
      <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-[0.02]"></div>

      {/* Newsletter Section with Glass Effect */}
      <div className="relative">
        <div className="container mx-auto px-6 py-16">
          <div className="relative p-8 rounded-2xl bg-gradient-to-b from-white/[0.05] to-transparent backdrop-blur-sm border border-white/5">
            <div className="absolute inset-0 bg-gradient-radial from-[#FF6B00]/5 via-transparent to-transparent"></div>
            <div className="relative max-w-3xl mx-auto text-center">
              <FaChurch className="w-12 h-12 mx-auto mb-6 text-[#FF6B00] opacity-80" />
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Conecte-se Conosco
              </h2>
              <p className="text-gray-400 mb-8">
                Receba inspirações diárias e mantenha-se atualizado com nossas
                atividades
              </p>
              <form className="flex flex-col sm:flex-row gap-4 justify-center">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="px-6 py-4 bg-white/[0.03] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/50 transition-all duration-300 border border-white/5 hover:border-[#FF6B00]/30 cursor-text"
                />
                <button className="px-8 py-4 bg-gradient-to-r from-[#FF6B00] to-[#FF8533] rounded-xl hover:from-[#FF8533] hover:to-[#FF6B00] transition-all duration-500 font-semibold transform hover:translate-y-[-2px] hover:shadow-lg hover:shadow-[#FF6B00]/20 cursor-pointer active:scale-95">
                  Inscrever-se
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-16">
          {/* About Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold tracking-wide">
              <span className="bg-gradient-to-r from-[#FF6B00] to-[#FF8533] bg-clip-text text-transparent">
                Cristo Liberta
              </span>
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Um lugar de fé, esperança e amor para todos. Venha fazer parte
              desta família e crescer em comunhão.
            </p>
            <div className="space-y-4">
              {[
                {
                  icon: FaMapMarkerAlt,
                  text: "Estr. Victor's, 360 - Recanto dos Victor's, Cotia - SP, 06717-230",
                  link: "https://maps.app.goo.gl/KfFKdky9T8U9V1Rx8",
                },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="flex items-center space-x-3 text-gray-400 group cursor-pointer hover:bg-white/[0.02] p-2 rounded-lg transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/[0.03] flex items-center justify-center group-hover:bg-[#FF6B00]/10 transition-colors duration-300">
                    <item.icon className="w-5 h-5 text-[#FF6B00]" />
                  </div>
                  <span className="text-sm group-hover:text-white transition-colors duration-300">
                    {item.text}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links - Updated Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold tracking-wide">
              <span className="bg-gradient-to-r from-[#FF6B00] to-[#FF8533] bg-clip-text text-transparent">
                Links Rápidos
              </span>
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = link.path;
                    }}
                    className="group flex items-center p-2 -ml-2 rounded-lg hover:bg-white/[0.03] transition-all duration-300"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#FF6B00]/50 mr-3 group-hover:w-3 group-hover:bg-[#FF6B00] transition-all duration-300"></span>
                    <span className="text-gray-400 text-sm group-hover:text-white transition-colors duration-300">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Times */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold tracking-wide">
              <span className="bg-gradient-to-r from-[#FF6B00] to-[#FF8533] bg-clip-text text-transparent">
                Horários
              </span>
            </h3>
            <div className="space-y-4">
              {[
                {
                  dia: "Domingo",
                  horarios: ["18:00 - 20:00 - Culto com a Família"],
                },
                {
                  dia: "Segunda",
                  horarios: [
                    "19:30 - 20:00 - Intercessão",
                    "20:00 - 21:00 - Estudo Bíblico",
                  ],
                },
                {
                  dia: "Quarta",
                  horarios: ["19:30 - 21:00 - Culto de Propósitos"],
                },
              ].map((item, index) => (
                <a
                  key={index}
                  href={`/agenda/${item.dia.toLowerCase()}`}
                  className="block p-4 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] transition-all duration-300 cursor-pointer transform hover:-translate-y-1 hover:shadow-lg hover:shadow-[#FF6B00]/5"
                >
                  <h4 className="text-[#FF6B00] font-medium mb-2">
                    {item.dia}
                  </h4>
                  {item.horarios.map((horario, idx) => (
                    <p
                      key={idx}
                      className="text-gray-400 text-sm group-hover:text-white"
                    >
                      {horario}
                    </p>
                  ))}
                </a>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold tracking-wide">
              <span className="bg-gradient-to-r from-[#FF6B00] to-[#FF8533] bg-clip-text text-transparent">
                Social
              </span>
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: FaFacebookF,
                  label: "Facebook",
                  link: "https://www.facebook.com/CristoLibertaCotiaOficial/?locale=pt_BR",
                },
                {
                  icon: FaInstagram,
                  label: "Instagram",
                  link: "https://www.instagram.com/icl_cotia/",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="p-4 rounded-xl bg-white/[0.03] hover:bg-gradient-to-br hover:from-[#FF6B00]/20 hover:to-transparent
                           flex items-center space-x-3 group transition-all duration-300 border border-white/5 hover:border-[#FF6B00]/30
                           cursor-pointer transform hover:-translate-y-1 hover:shadow-lg hover:shadow-[#FF6B00]/5"
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-[#FF6B00]" />
                  <span className="text-sm text-gray-400 group-hover:text-white">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar - Updated */}
        <div className="mt-16 pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Igreja. Todos os direitos reservados.
            </p>
            <div className="flex items-center">
              {["Privacidade", "Termos", "FAQ"].map((item, index, arr) => (
                <div key={item} className="flex items-center">
                  <a
                    href={`/${item.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = `/${item.toLowerCase()}`;
                    }}
                    className="text-gray-500 hover:text-[#FF6B00] text-sm transition-all duration-300 hover:scale-105 px-3"
                  >
                    {item}
                  </a>
                  {index < arr.length - 1 && (
                    <span className="w-1 h-1 rounded-full bg-gray-700"></span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
