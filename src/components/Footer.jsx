import { Link } from "react-router-dom"; // Adicionar import do Link
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaChurch,
} from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const { isDark } = useTheme();

  const quickLinks = [
    { name: "Início", path: "/" },
    { name: "Sobre", path: "/sobre" },
    { name: "Eventos", path: "/eventos" },
    { name: "Contato", path: "/contato" },
    { name: "Doações", path: "/doacoes" },
  ];

  return (
    <footer
      className={`relative mt-0 ${
        isDark
          ? "bg-[#11182c] text-white border-t-0"
          : "bg-gray-50 text-gray-800"
      } transition-colors duration-300`}
    >
      {/* Efeito de sobreposição suave */}
      <div
        className={`absolute inset-0 ${
          isDark
            ? "bg-gradient-to-t from-transparent via-[#11182c]/50 to-transparent"
            : "bg-gradient-to-t from-transparent via-white/50 to-transparent"
        }`}
      ></div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF6B00] to-transparent opacity-30"></div>
      <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-[0.05]"></div>

      {/* Newsletter Section with Glass Effect */}
      <div className="relative">
        <div className="container mx-auto px-6 py-16">
          <div
            className={`relative p-8 rounded-2xl ${
              isDark
                ? "bg-[#1E293B] border-white/10"
                : "bg-white border-gray-100"
            } shadow-xl border transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1`}
          >
            <div className="relative max-w-3xl mx-auto text-center">
              <FaChurch className="w-12 h-12 mx-auto mb-6 text-[#FF6B00] hover:scale-110 transition-transform duration-300" />
              <h2
                className={`text-4xl font-bold mb-6 ${
                  isDark ? "text-white" : "text-gray-800"
                }`}
              >
                Conecte-se Conosco
              </h2>
              <p
                className={`text-lg ${
                  isDark ? "text-gray-200" : "text-gray-600"
                } mb-8`}
              >
                Receba inspirações diárias e mantenha-se atualizado com nossas
                atividades
              </p>
              <form className="flex flex-col sm:flex-row gap-4 justify-center">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="px-6 py-4 text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-[#0A1126] rounded-xl dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/50 transition-all duration-300 border border-gray-200"
                />
                <button className="px-8 py-4 bg-gradient-to-r from-[#FF6B00] to-[#FF8533] text-white rounded-xl hover:from-[#FF8533] hover:to-[#FF6B00] transition-all duration-500 font-semibold">
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
            <h3 className="text-4xl font-bold">
              <span
                className="bg-gradient-to-r from-[#FF6B00] via-[#ff8534] to-[#FF6B00] 
                           text-transparent bg-clip-text tracking-wide"
              >
                Cristo Liberta
              </span>
            </h3>
            <p
              className={`leading-relaxed text-sm ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
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
            <h3 className="text-4xl font-bold">
              <span
                className="bg-gradient-to-r from-[#FF6B00] via-[#ff8534] to-[#FF6B00] 
                           text-transparent bg-clip-text tracking-wide"
              >
                Links Rápidos
              </span>
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`group flex items-center p-3 rounded-lg hover:bg-[#FF6B00]/10
                    transition-all duration-300`}
                  >
                    <span
                      className="w-2 h-2 rounded-full bg-[#FF6B00] mr-3 
                                   group-hover:w-3 transition-all duration-300"
                    ></span>
                    <span
                      className={`text-lg font-medium ${
                        isDark ? "text-gray-100" : "text-gray-700"
                      } group-hover:text-[#FF6B00]`}
                    >
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Times */}
          <div className="space-y-8">
            <h3 className="text-4xl font-bold">
              <span
                className="bg-gradient-to-r from-[#FF6B00] via-[#ff8534] to-[#FF6B00] 
                           text-transparent bg-clip-text tracking-wide"
              >
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
                <Link
                  key={index}
                  to={`/agenda/${item.dia.toLowerCase()}`}
                  className={`block p-6 rounded-xl transition-all duration-300 transform 
                            hover:-translate-y-1 border ${
                              isDark
                                ? "bg-[#1E293B] hover:bg-[#2D3B4E] border-white/10"
                                : "bg-white hover:bg-gray-50 border-gray-200"
                            } shadow-lg hover:shadow-xl`}
                >
                  <h4 className="text-2xl font-bold mb-3 text-[#FF6B00]">
                    {item.dia}
                  </h4>
                  {item.horarios.map((horario, idx) => (
                    <p
                      key={idx}
                      className={`text-lg ${
                        isDark ? "text-gray-100" : "text-gray-700"
                      }`}
                    >
                      {horario}
                    </p>
                  ))}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-8">
            <h3 className="text-4xl font-bold">
              <span
                className="bg-gradient-to-r from-[#FF6B00] via-[#ff8534] to-[#FF6B00] 
                           text-transparent bg-clip-text tracking-wide"
              >
                Redes Sociais
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
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-5 rounded-xl flex items-center space-x-4 group 
                         transition-all duration-300 border shadow-lg ${
                           isDark
                             ? "bg-[#1E293B] hover:bg-[#2D3B4E] border-white/10"
                             : "bg-white hover:bg-gray-50 border-gray-200"
                         } hover:shadow-xl transform hover:-translate-y-1`}
                >
                  <social.icon
                    className={`w-7 h-7 ${
                      isDark ? "text-gray-100" : "text-gray-700"
                    } group-hover:text-[#FF6B00] transform group-hover:scale-110`}
                  />
                  <span
                    className={`text-lg font-medium ${
                      isDark ? "text-gray-100" : "text-gray-700"
                    } group-hover:text-[#FF6B00]`}
                  >
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar - Updated */}
        <div
          className={`mt-16 pt-8 border-t ${
            isDark ? "border-white/10" : "border-gray-200"
          }`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p
              className={`text-sm ${
                isDark ? "text-gray-300" : "text-gray-500"
              }`}
            >
              © {new Date().getFullYear()} tififerreira@gmail.com <br />
              Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-2">
              {["Privacidade", "Termos", "FAQ"].map((item, index) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className={`text-sm px-3 transition-all duration-300 hover:scale-105 ${
                    isDark
                      ? "text-gray-300 hover:text-[#FF6B00]"
                      : "text-gray-500 hover:text-[#FF6B00]"
                  }`}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
