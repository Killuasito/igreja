import ImageSlider from "../components/ImageSlider";

const SliderPage = () => {
  const slides = [
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

  return (
    <div className="pt-20 bg-white">
      <ImageSlider images={slides} autoPlayTime={5000} />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Nossa <span className="text-[#FF6B00]">Galeria</span>
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto">
          Explore nossos momentos especiais e faça parte desta história.
        </p>
      </div>
    </div>
  );
};

export default SliderPage;
