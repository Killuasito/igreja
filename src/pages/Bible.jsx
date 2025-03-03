import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { 
  FaSearch, FaBookOpen, FaBookmark, FaChevronDown, 
  FaChevronRight, FaExternalLinkAlt, FaHeart, FaShare
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Bible = () => {
  const { isDark } = useTheme();
  const [selectedBook, setSelectedBook] = useState("genesis");
  const [selectedBookIndex, setSelectedBookIndex] = useState(0);
  const [selectedChapter, setSelectedChapter] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [isBookListOpen, setIsBookListOpen] = useState(false);
  const [dailyVerse, setDailyVerse] = useState({
    text: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.",
    reference: "João 3:16"
  });
  const [favorites, setFavorites] = useState([]);
  const [showFavoriteToast, setShowFavoriteToast] = useState(false);
  const [showShareToast, setShowShareToast] = useState(false);

  // Livros da Bíblia
  const bibleBooks = [
    { id: "genesis", name: "Gênesis", abbr: "gen", chapters: 50 },
    { id: "exodus", name: "Êxodo", abbr: "exo", chapters: 40 },
    { id: "leviticus", name: "Levítico", abbr: "lev", chapters: 27 },
    { id: "numbers", name: "Números", abbr: "num", chapters: 36 },
    { id: "deuteronomy", name: "Deuteronômio", abbr: "deu", chapters: 34 },
    { id: "joshua", name: "Josué", abbr: "jos", chapters: 24 },
    { id: "judges", name: "Juízes", abbr: "jdg", chapters: 21 },
    { id: "ruth", name: "Rute", abbr: "rut", chapters: 4 },
    { id: "1samuel", name: "1 Samuel", abbr: "1sa", chapters: 31 },
    { id: "2samuel", name: "2 Samuel", abbr: "2sa", chapters: 24 },
    { id: "1kings", name: "1 Reis", abbr: "1ki", chapters: 22 },
    { id: "2kings", name: "2 Reis", abbr: "2ki", chapters: 25 },
    { id: "1chronicles", name: "1 Crônicas", abbr: "1ch", chapters: 29 },
    { id: "2chronicles", name: "2 Crônicas", abbr: "2ch", chapters: 36 },
    { id: "ezra", name: "Esdras", abbr: "ezr", chapters: 10 },
    { id: "nehemiah", name: "Neemias", abbr: "neh", chapters: 13 },
    { id: "esther", name: "Ester", abbr: "est", chapters: 10 },
    { id: "job", name: "Jó", abbr: "job", chapters: 42 },
    { id: "psalms", name: "Salmos", abbr: "psa", chapters: 150 },
    { id: "proverbs", name: "Provérbios", abbr: "pro", chapters: 31 },
    { id: "ecclesiastes", name: "Eclesiastes", abbr: "ecc", chapters: 12 },
    { id: "songofsolomon", name: "Cânticos", abbr: "sng", chapters: 8 },
    { id: "isaiah", name: "Isaías", abbr: "isa", chapters: 66 },
    { id: "jeremiah", name: "Jeremias", abbr: "jer", chapters: 52 },
    { id: "lamentations", name: "Lamentações", abbr: "lam", chapters: 5 },
    { id: "ezekiel", name: "Ezequiel", abbr: "ezk", chapters: 48 },
    { id: "daniel", name: "Daniel", abbr: "dan", chapters: 12 },
    { id: "hosea", name: "Oséias", abbr: "hos", chapters: 14 },
    { id: "joel", name: "Joel", abbr: "jol", chapters: 3 },
    { id: "amos", name: "Amós", abbr: "amo", chapters: 9 },
    { id: "obadiah", name: "Obadias", abbr: "oba", chapters: 1 },
    { id: "jonah", name: "Jonas", abbr: "jon", chapters: 4 },
    { id: "micah", name: "Miquéias", abbr: "mic", chapters: 7 },
    { id: "nahum", name: "Naum", abbr: "nam", chapters: 3 },
    { id: "habakkuk", name: "Habacuque", abbr: "hab", chapters: 3 },
    { id: "zephaniah", name: "Sofonias", abbr: "zep", chapters: 3 },
    { id: "haggai", name: "Ageu", abbr: "hag", chapters: 2 },
    { id: "zechariah", name: "Zacarias", abbr: "zec", chapters: 14 },
    { id: "malachi", name: "Malaquias", abbr: "mal", chapters: 4 },
    { id: "matthew", name: "Mateus", abbr: "mat", chapters: 28 },
    { id: "mark", name: "Marcos", abbr: "mrk", chapters: 16 },
    { id: "luke", name: "Lucas", abbr: "luk", chapters: 24 },
    { id: "john", name: "João", abbr: "jhn", chapters: 21 },
    { id: "acts", name: "Atos", abbr: "act", chapters: 28 },
    { id: "romans", name: "Romanos", abbr: "rom", chapters: 16 },
    { id: "1corinthians", name: "1 Coríntios", abbr: "1co", chapters: 16 },
    { id: "2corinthians", name: "2 Coríntios", abbr: "2co", chapters: 13 },
    { id: "galatians", name: "Gálatas", abbr: "gal", chapters: 6 },
    { id: "ephesians", name: "Efésios", abbr: "eph", chapters: 6 },
    { id: "philippians", name: "Filipenses", abbr: "php", chapters: 4 },
    { id: "colossians", name: "Colossenses", abbr: "col", chapters: 4 },
    { id: "1thessalonians", name: "1 Tessalonicenses", abbr: "1th", chapters: 5 },
    { id: "2thessalonians", name: "2 Tessalonicenses", abbr: "2th", chapters: 3 },
    { id: "1timothy", name: "1 Timóteo", abbr: "1ti", chapters: 6 },
    { id: "2timothy", name: "2 Timóteo", abbr: "2ti", chapters: 4 },
    { id: "titus", name: "Tito", abbr: "tit", chapters: 3 },
    { id: "philemon", name: "Filemom", abbr: "phm", chapters: 1 },
    { id: "hebrews", name: "Hebreus", abbr: "heb", chapters: 13 },
    { id: "james", name: "Tiago", abbr: "jas", chapters: 5 },
    { id: "1peter", name: "1 Pedro", abbr: "1pe", chapters: 5 },
    { id: "2peter", name: "2 Pedro", abbr: "2pe", chapters: 3 },
    { id: "1john", name: "1 João", abbr: "1jn", chapters: 5 },
    { id: "2john", name: "2 João", abbr: "2jn", chapters: 1 },
    { id: "3john", name: "3 João", abbr: "3jn", chapters: 1 },
    { id: "jude", name: "Judas", abbr: "jud", chapters: 1 },
    { id: "revelation", name: "Apocalipse", abbr: "rev", chapters: 22 },
  ];

  useEffect(() => {
    setIsLoading(true);
    
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  }, [selectedBook, selectedChapter]);

  // Set a popular verse for "verse of the day" with rotation
  useEffect(() => {
    const popularVerses = [
      { 
        text: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.",
        reference: "João 3:16" 
      },
      { 
        text: "O Senhor é o meu pastor; de nada terei falta.",
        reference: "Salmos 23:1" 
      },
      { 
        text: "Tudo posso naquele que me fortalece.",
        reference: "Filipenses 4:13" 
      },
      {
        text: "Não se turbe o vosso coração; credes em Deus, crede também em mim.",
        reference: "João 14:1"
      },
      {
        text: "Pois o salário do pecado é a morte, mas o dom gratuito de Deus é a vida eterna em Cristo Jesus, nosso Senhor.",
        reference: "Romanos 6:23"
      }
    ];
    
    // Choose a random verse from our collection
    const randomIndex = Math.floor(Math.random() * popularVerses.length);
    setDailyVerse(popularVerses[randomIndex]);
    
    // Load favorites from local storage
    const storedFavorites = localStorage.getItem('bibleFavorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  // Handle toast automatic closing
  useEffect(() => {
    if (showFavoriteToast) {
      const timer = setTimeout(() => {
        setShowFavoriteToast(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showFavoriteToast]);

  useEffect(() => {
    if (showShareToast) {
      const timer = setTimeout(() => {
        setShowShareToast(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showShareToast]);

  const handleBookChange = (bookId, index) => {
    setSelectedBook(bookId);
    setSelectedBookIndex(index);
    setSelectedChapter(1);
    setIsBookListOpen(false);
  };

  const handleChapterChange = (chapter) => {
    setSelectedChapter(chapter);
  };

  const filteredBooks = bibleBooks.filter(book => 
    book.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Get Bible.com URL
  const getBibleIframeUrl = () => {
    const currentBook = bibleBooks.find(book => book.id === selectedBook);
    if (!currentBook) return '';
    
    // YouVersion Bible embed URL format
    return `https://www.bible.com/bible/129/${currentBook.abbr}.${selectedChapter}.NVI`;
  };

  // Open in new tab
  const openInNewTab = () => {
    window.open(getBibleIframeUrl(), '_blank');
  };

  // Add current passage to favorites
  const addToFavorites = () => {
    const currentBook = bibleBooks.find(book => book.id === selectedBook);
    if (!currentBook) return;
    
    const newFavorite = {
      id: `${currentBook.id}-${selectedChapter}`,
      book: currentBook.name,
      chapter: selectedChapter,
      timestamp: new Date().toISOString()
    };
    
    // Check if already in favorites
    if (!favorites.some(fav => fav.id === newFavorite.id)) {
      const updatedFavorites = [...favorites, newFavorite];
      setFavorites(updatedFavorites);
      localStorage.setItem('bibleFavorites', JSON.stringify(updatedFavorites));
    }
    
    // Show confirmation toast
    setShowFavoriteToast(true);
  };

  // Share current passage
  const sharePassage = async () => {
    const currentBook = bibleBooks.find(book => book.id === selectedBook);
    if (!currentBook) return;
    
    const text = `Lendo ${currentBook.name} ${selectedChapter} - ${getBibleIframeUrl()}`;
    
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Compartilhar trecho bíblico',
          text: text,
          url: getBibleIframeUrl()
        });
      } else {
        // Fallback to copy to clipboard
        navigator.clipboard.writeText(text);
        setShowShareToast(true);
      }
    } catch (error) {
      console.error('Error sharing:', error);
      // Fallback to copy to clipboard on error
      navigator.clipboard.writeText(text);
      setShowShareToast(true);
    }
  };

  return (
    <div
      className={`min-h-screen pt-20 ${
        isDark
          ? "bg-[#0A1126] text-white"
          : "bg-gradient-to-b from-gray-50 via-white to-gray-50 text-gray-800"
      } transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-[#FF6B00]">Bíblia</span> Sagrada
          </h1>
          <motion.p
            className={`text-lg max-w-3xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Explore a palavra de Deus e encontre inspiração para seu dia.
          </motion.p>
        </motion.div>

        {/* Bible Navigation */}
        <motion.div 
          className={`grid md:grid-cols-5 gap-6 mb-10`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Book Selection on Mobile */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsBookListOpen(!isBookListOpen)}
              className={`w-full flex items-center justify-between p-4 rounded-lg ${
                isDark 
                  ? "bg-[#141E3C] hover:bg-[#1A2A4A]" 
                  : "bg-white hover:bg-gray-50"
              } border ${isDark ? "border-gray-700" : "border-gray-200"} shadow-sm`}
            >
              <span className="flex items-center">
                <FaBookOpen className="mr-2 text-[#FF6B00]" />
                {bibleBooks.find(book => book.id === selectedBook)?.name || "Selecione um livro"}
              </span>
              {isBookListOpen ? <FaChevronDown /> : <FaChevronRight />}
            </button>
            
            {isBookListOpen && (
              <div className={`mt-2 max-h-64 overflow-y-auto rounded-lg border ${
                isDark 
                  ? "bg-[#141E3C] border-gray-700" 
                  : "bg-white border-gray-200"
              } shadow-xl`}>
                <div className="p-3 sticky top-0 z-10 bg-inherit border-b">
                  <div className="relative">
                    <FaSearch className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
                      isDark ? "text-gray-400" : "text-gray-500"
                    }`} />
                    <input
                      type="text"
                      placeholder="Buscar livro..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className={`w-full py-2 pl-10 pr-4 rounded-md ${
                        isDark 
                          ? "bg-[#0A1126] text-white border-gray-700 focus:border-[#FF6B00]" 
                          : "bg-gray-100 text-gray-800 border-gray-300 focus:border-[#FF6B00]"
                      } border focus:outline-none focus:ring-1 focus:ring-[#FF6B00]`}
                    />
                  </div>
                </div>
                <div className="p-1">
                  {filteredBooks.map((book, index) => (
                    <button
                      key={book.id}
                      onClick={() => handleBookChange(book.id, index)}
                      className={`w-full text-left px-4 py-2 rounded-md ${
                        selectedBook === book.id
                          ? "bg-[#FF6B00] text-white"
                          : isDark
                            ? "hover:bg-[#1A2A4A]"
                            : "hover:bg-gray-100"
                      } transition-colors duration-200`}
                    >
                      {book.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Book Selection for Desktop */}
          <div className={`hidden md:block md:col-span-2 ${
            isDark ? "bg-[#141E3C]" : "bg-white"
          } rounded-lg border ${
            isDark ? "border-gray-700" : "border-gray-200"
          } shadow-md overflow-hidden`}>
            <div className="p-4 border-b border-inherit">
              <div className="relative">
                <FaSearch className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`} />
                <input
                  type="text"
                  placeholder="Buscar livro..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full py-2 pl-10 pr-4 rounded-md ${
                    isDark 
                      ? "bg-[#0A1126] text-white border-gray-700 focus:border-[#FF6B00]" 
                      : "bg-gray-100 text-gray-800 border-gray-300 focus:border-[#FF6B00]"
                  } border focus:outline-none focus:ring-1 focus:ring-[#FF6B00]`}
                />
              </div>
            </div>

            <div className="h-[500px] overflow-y-auto p-2">
              {filteredBooks.map((book, index) => (
                <button
                  key={book.id}
                  onClick={() => handleBookChange(book.id, index)}
                  className={`w-full text-left px-4 py-3 mb-1 rounded-md ${
                    selectedBook === book.id
                      ? "bg-[#FF6B00] text-white"
                      : isDark
                        ? "hover:bg-[#1A2A4A]"
                        : "hover:bg-gray-100"
                  } transition-colors duration-200`}
                >
                  {book.name}
                </button>
              ))}
            </div>
          </div>

          {/* Bible Content Section */}
          <div className={`md:col-span-3 ${
            isDark ? "bg-[#141E3C]" : "bg-white"
          } rounded-lg border ${
            isDark ? "border-gray-700" : "border-gray-200"
          } shadow-md overflow-hidden`}>
            {/* Header with title and action buttons */}
            <div className="p-4 border-b border-inherit flex justify-between items-center">
              <h2 className="text-xl font-semibold flex items-center">
                <FaBookmark className="mr-2 text-[#FF6B00]" />
                {bibleBooks.find(book => book.id === selectedBook)?.name} - Capítulo {selectedChapter}
              </h2>
              <div className="flex space-x-3">
                <button 
                  onClick={addToFavorites}
                  className="text-[#FF6B00] hover:text-orange-500 flex items-center"
                  title="Salvar como favorito"
                >
                  <FaHeart className="w-4 h-4" />
                </button>
                <button 
                  onClick={sharePassage}
                  className="text-[#FF6B00] hover:text-orange-500 flex items-center"
                  title="Compartilhar"
                >
                  <FaShare className="w-4 h-4" />
                </button>
                <button 
                  onClick={openInNewTab}
                  className="text-[#FF6B00] hover:text-orange-500 flex items-center"
                  title="Abrir no Bible.com"
                >
                  <FaExternalLinkAlt className="w-4 h-4 mr-1" />
                  <span className="hidden sm:inline">Abrir</span>
                </button>
              </div>
            </div>

            {/* Chapter selector pills */}
            <div className="p-4 overflow-x-auto">
              <div className="flex flex-wrap gap-2">
                {Array.from(
                  { length: bibleBooks.find(book => book.id === selectedBook)?.chapters || 0 },
                  (_, i) => i + 1
                ).map(chapter => (
                  <motion.button
                    key={chapter}
                    onClick={() => handleChapterChange(chapter)}
                    className={`min-w-[40px] h-10 flex items-center justify-center rounded-md ${
                      selectedChapter === chapter
                        ? "bg-[#FF6B00] text-white"
                        : isDark
                          ? "bg-[#0A1126] hover:bg-[#1A2A4A] text-gray-300"
                          : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                    } transition-colors duration-200`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {chapter}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Bible Content via iframe with loading state */}
            <div className="w-full h-[500px] relative bg-white">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-[#0A1126] bg-opacity-80 dark:bg-opacity-80 z-10">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 border-4 border-[#FF6B00] border-t-transparent rounded-full animate-spin"></div>
                    <p className="mt-4 text-gray-600 dark:text-gray-300">Carregando...</p>
                  </div>
                </div>
              )}
              <iframe 
                src={getBibleIframeUrl()}
                title="Bible Content"
                className="w-full h-full border-0"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </motion.div>

        {/* Daily verse section */}
        <motion.div 
          className={`mt-12 p-8 rounded-xl ${
            isDark ? "bg-[#141E3C] border-[#1A2A4A]" : "bg-white border-gray-100"
          } border shadow-lg`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-4 flex items-center">
            <span className="bg-[#FF6B00] w-6 h-6 rounded-full mr-2"></span>
            Versículo do Dia
          </h3>
          <blockquote className={`p-6 border-l-4 border-[#FF6B00] ${
            isDark ? "bg-[#0A1126]" : "bg-gray-50"
          } shadow-sm rounded-r-lg`}>
            <p className="text-xl italic mb-3 leading-relaxed">
              "{dailyVerse.text}"
            </p>
            <footer className={`font-medium ${isDark ? "text-[#FF6B00]" : "text-[#FF6B00]"}`}>
              {dailyVerse.reference}
            </footer>
          </blockquote>
        </motion.div>

        {/* Recently viewed/favorites */}
        {favorites.length > 0 && (
          <motion.div 
            className={`mt-12 p-8 rounded-xl ${
              isDark ? "bg-[#141E3C] border-[#1A2A4A]" : "bg-white border-gray-100"
            } border shadow-lg`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <FaHeart className="text-[#FF6B00] mr-2" /> Meus Favoritos
            </h3>
            <div className="flex flex-wrap gap-2">
              {favorites.map((fav) => (
                <motion.button
                  key={fav.id}
                  onClick={() => {
                    const bookId = fav.id.split('-')[0];
                    const bookIndex = bibleBooks.findIndex(book => book.id === bookId);
                    if (bookIndex >= 0) {
                      handleBookChange(bookId, bookIndex);
                      handleChapterChange(fav.chapter);
                    }
                  }}
                  className={`px-3 py-2 rounded-lg text-sm ${
                    isDark 
                      ? "bg-[#0A1126] hover:bg-[#1A2A4A] text-white" 
                      : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {fav.book} {fav.chapter}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Toast notifications */}
      <AnimatePresence>
        {showFavoriteToast && (
          <motion.div 
            className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-[#FF6B00] text-white px-4 py-2 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <div className="flex items-center">
              <FaHeart className="mr-2" />
              <span>Adicionado aos favoritos</span>
            </div>
          </motion.div>
        )}
        
        {showShareToast && (
          <motion.div 
            className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-[#FF6B00] text-white px-4 py-2 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <div className="flex items-center">
              <FaShare className="mr-2" />
              <span>Link copiado para a área de transferência</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Bible;
