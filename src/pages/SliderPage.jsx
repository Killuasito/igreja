import { useState } from "react";
import ImageSlider from "../components/ImageSlider";
import { useTheme } from "../context/ThemeContext";
import { FaSearch, FaTimes } from "react-icons/fa";
<<<<<<< HEAD
import { motion, AnimatePresence } from "framer-motion";
=======
>>>>>>> 5f952303f877eb762dfb26a151c964a409e3be39

const SliderPage = () => {
  const { isDark } = useTheme();
  const [selectedImage, setSelectedImage] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  const handleCloseModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedImage(null);
      setIsClosing(false);
    }, 300);
  };

  const images = [
    {
      image: "https://i.ibb.co/zVGHctgG/PHOTO-2025-02-21-11-07-26.jpg",
    },
    {
      image: "https://i.ibb.co/PvLGVX66/PHOTO-2025-02-04-16-53-31.jpg",
    },
    {
      image: "https://i.ibb.co/k2dT4mhS/PHOTO-2025-02-04-16-53-33.jpg",
    },
  ];

  const galleryImages = [
    {
      url: "https://i.ibb.co/zVGHctgG/PHOTO-2025-02-21-11-07-26.jpg",
      title: "",
    },
    {
      url: "https://i.ibb.co/S4fWQKQ3/6d8f8268-436e-48e0-8498-09467b3316ac.jpg",
      title: "",
    },
    {
      url: "https://i.ibb.co/8nFv1Knm/f860ff72-8156-48c1-98de-d0f89938d4bd.jpg",
      title: "",
    },
    {
      url: "https://i.ibb.co/tMxR5t6f/ff5bc665-8a37-4afd-8182-39c038afde0f.jpg",
      title: "",
    },
    { url: "https://i.ibb.co/QFkpKrct/IMG-0968.jpg", title: "" },
    { url: "https://i.ibb.co/WvGbQPzz/IMG-1064.jpg", title: "" },
    // Adicione mais imagens conforme necessário
  ];

  return (
    <div className={`min-h-screen ${isDark ? "bg-[#0A1126]" : "bg-white"}`}>
      <div className="pt-28">
        <div className="px-4 lg:px-8 xl:px-0">
          {/* Slider Section */}
<<<<<<< HEAD
          <motion.div 
            className="bg-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <ImageSlider images={images} />
          </motion.div>

          {/* Gallery Section com tamanhos ajustados */}
          <div className="container mx-auto px-4 py-20">
            <motion.h2
              className={`text-4xl font-bold text-center mb-16 ${
                isDark ? "text-white" : "text-gray-800"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Nossa <span className="text-[#FF6B00]">Galeria</span>
            </motion.h2>

            <motion.div 
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  className="group cursor-pointer transform transition-all duration-300 hover:-translate-y-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
=======
          <div className="bg-transparent">
            <ImageSlider images={images} />
          </div>

          {/* Gallery Section com tamanhos ajustados */}
          <div className="container mx-auto px-4 py-20">
            <h2
              className={`text-4xl font-bold text-center mb-16 ${
                isDark ? "text-white" : "text-gray-800"
              }`}
            >
              Nossa <span className="text-[#FF6B00]">Galeria</span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  className="group cursor-pointer transform transition-all duration-300 hover:-translate-y-1"
>>>>>>> 5f952303f877eb762dfb26a151c964a409e3be39
                >
                  <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                      <FaSearch className="text-white text-3xl opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300" />
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3
                      className={`font-medium text-lg ${
                        isDark ? "text-gray-200" : "text-gray-800"
                      }`}
                    >
                      {image.title}
                    </h3>
                  </div>
<<<<<<< HEAD
                </motion.div>
              ))}
            </motion.div>
=======
                </div>
              ))}
            </div>
>>>>>>> 5f952303f877eb762dfb26a151c964a409e3be39
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* Modal with AnimatePresence for smooth entry/exit */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 backdrop-blur-sm p-4 md:p-8 flex items-center justify-center"
            onClick={handleCloseModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="relative max-w-5xl mx-auto"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.4 }}
            >
              <button
                onClick={handleCloseModal}
                className="absolute -top-12 right-4 text-white/80 hover:text-white transition-colors duration-300"
              >
                <FaTimes className="w-8 h-8" />
              </button>
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
              <motion.p 
                className="text-white text-center mt-6 text-xl font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                {selectedImage.title}
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
=======
      {/* Modal ajustado para melhor visualização */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 backdrop-blur-sm p-4 md:p-8"
          onClick={handleCloseModal}
          style={{
            animation: isClosing
              ? "fadeOut 300ms ease-out forwards"
              : "fadeIn 300ms ease-out forwards",
          }}
        >
          <div
            className="relative max-w-5xl mx-auto mt-10 md:mt-20"
            style={{
              animation: isClosing
                ? "slideDown 300ms ease-out forwards"
                : "slideUp 500ms ease-out forwards",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseModal}
              className="absolute -top-12 right-4 text-white/80 hover:text-white transition-colors duration-300"
            >
              <FaTimes className="w-8 h-8" />
            </button>
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            <p className="text-white text-center mt-6 text-xl font-medium">
              {selectedImage.title}
            </p>
          </div>
        </div>
      )}
>>>>>>> 5f952303f877eb762dfb26a151c964a409e3be39

      {/* Animações CSS atualizadas */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            background-color: rgba(0, 0, 0, 0);
          }
          to {
            background-color: rgba(0, 0, 0, 0.9);
          }
        }

        @keyframes fadeOut {
          from {
            background-color: rgba(0, 0, 0, 0.9);
          }
          to {
            background-color: rgba(0, 0, 0, 0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(20px);
          }
        }
      `}</style>
    </div>
  );
};

export default SliderPage;
