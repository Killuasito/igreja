import ImageSlider from "../components/ImageSlider";

const SliderPage = () => {
  const slides = [
    {
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTfKXA4NpG4KgjhA9V3pmFIYrD7fEdgr05_9AWKD2_zps84JWWJXMB1bCMYmi_lyse027H3dt66t0-Pkd90oRtxwT41x7muXKsH0bWukL0",
      title: "Culto de Celebração",
      description: "Domingos às 19h - Venha celebrar conosco",
    },
    {
      image:
        "https://images.unsplash.com/photo-1543465077-db45d34b88a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920&q=80",
      title: "Encontro de Jovens",
      description: "Sábados às 19h - Um tempo especial de comunhão",
    },
    {
      image:
        "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920&q=80",
      title: "Escola Dominical",
      description: "Domingos às 9h - Aprendendo juntos",
    },
  ];

  return (
    <div className="pt-20 bg-[#0A1126]">
      <ImageSlider images={slides} autoPlayTime={5000} />

      {/* Seção de Conteúdo Opcional */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-white mb-8">
          Nossa <span className="text-[#FF6B00]">Galeria</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto">
          Explore nossos momentos especiais e faça parte desta história.
        </p>
      </div>
    </div>
  );
};

export default SliderPage;
