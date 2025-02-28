import { useState } from "react";
import ImageSlider from "../components/ImageSlider";
import { useTheme } from "../context/ThemeContext";
import { FaSearch, FaTimes } from "react-icons/fa";

const SliderPage = () => {
  const { isDark } = useTheme();
  const [selectedImage, setSelectedImage] = useState(null);

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
    { url: "/igreja1.jpg", title: "Culto de Domingo" },
    { url: "/igreja2.jpg", title: "Momento de Adoração" },
    { url: "/igreja3.jpg", title: "Estudo Bíblico" },
    { url: "/igreja4.jpg", title: "Batismo" },
    { url: "/igreja5.jpg", title: "Grupo de Jovens" },
    { url: "/igreja6.jpg", title: "Células" },
    // Adicione mais imagens conforme necessário
  ];

  return (
    <div className={`min-h-screen ${isDark ? "bg-[#0A1126]" : "bg-gray-50"}`}>
      <div className="pt-28">
        {/* Container com padding ajustado */}
        <div className="px-4 lg:px-8 xl:px-0">
          {/* Slider Section com sombra e espaçamento */}
          <div className="bg-transparent mb-16">
            <ImageSlider images={images} />
          </div>

          {/* Gallery Section */}
          <div className="container mx-auto px-4 py-20">
            <h2 className="text-4xl text-[#1E293B] dark:text-gray-100 font-bold text-center mb-16">
              Nossa <span className="text-[#FF6B00]">Galeria</span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  className={`relative group cursor-pointer overflow-hidden rounded-xl ${
                    isDark ? "bg-[#1E293B]" : "bg-white"
                  } shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
                >
                  <div className="aspect-w-16 aspect-h-12">
                    <img
                      src={image.url}
                      alt={image.title}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                      <FaSearch className="text-white text-3xl transform scale-0 group-hover:scale-100 transition-transform duration-300" />
                    </div>
                  </div>
                  <div
                    className={`p-4 ${
                      isDark ? "text-gray-200" : "text-gray-800"
                    }`}
                  >
                    <h3 className="font-medium text-lg">{image.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Modal para visualização da imagem */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-[#FF6B00] transition-colors duration-300"
            >
              <FaTimes className="w-8 h-8" />
            </button>
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <p className="text-white text-center mt-4 text-xl font-medium">
              {selectedImage.title}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SliderPage;
