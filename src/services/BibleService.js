import axios from "axios";
import bibleData from "../data/bibleData";

// URL base da API da Bíblia Digital
const API_BASE_URL = "https://www.abibliadigital.com.br/api";

// Você pode obter sua própria chave de API registrando-se em https://www.abibliadigital.com.br/
// const API_KEY = "sua-chave-de-api";

const BibleService = {
  /**
   * Busca um capítulo específico da Bíblia
   * @param {string} version - A versão da bíblia (ex: 'nvi', 'acf', etc)
   * @param {string} abbr - Abreviação do livro
   * @param {number} chapter - Número do capítulo
   * @param {number} bookId - ID do livro
   * @returns {Promise} - Promessa com os versículos
   */
  async getChapter(version = "nvi", abbr, chapter, bookId) {
    try {
      // Try to get from local data first
      if (bibleData && bibleData[bookId] && bibleData[bookId][chapter]) {
        // Convert the local data format to match API format
        const verses = Object.entries(bibleData[bookId][chapter]).map(([num, text]) => ({
          number: parseInt(num),
          text: text
        }));
        
        return {
          book: { name: abbr },
          chapter: chapter,
          verses: verses
        };
      }
      
      // If not in local data, try API
      const response = await axios.get(`${API_BASE_URL}/verses/${version}/${abbr}/${chapter}`);
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar capítulo:", error);
      throw error;
    }
  },

  /**
   * Busca um versículo específico da Bíblia
   * @param {string} version - A versão da bíblia
   * @param {string} abbr - Abreviação do livro
   * @param {number} chapter - Número do capítulo
   * @param {number} verse - Número do versículo
   * @returns {Promise} - Promessa com o versículo
   */
  async getVerse(version = "nvi", abbr, chapter, verse) {
    try {
      const response = await axios.get(`${API_BASE_URL}/verses/${version}/${abbr}/${chapter}/${verse}`);
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar versículo:", error);
      throw error;
    }
  },

  /**
   * Busca um versículo aleatório
   * @param {string} version - A versão da bíblia
   * @returns {Promise} - Promessa com um versículo aleatório
   */
  async getRandomVerse(version = "nvi") {
    try {
      // First try to get from API
      const response = await axios.get(`${API_BASE_URL}/verses/${version}/random`);
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar versículo aleatório:", error);
      
      // Fallback to local data
      const books = Object.keys(bibleData);
      if (books.length > 0) {
        const randomBook = books[Math.floor(Math.random() * books.length)];
        const chapters = Object.keys(bibleData[randomBook]);
        const randomChapter = chapters[Math.floor(Math.random() * chapters.length)];
        const verses = Object.keys(bibleData[randomBook][randomChapter]);
        const randomVerse = verses[Math.floor(Math.random() * verses.length)];
        
        // Format the response to match API format
        const bookName = randomBook === "genesis" ? "Gênesis" : 
                         randomBook === "john" ? "João" : 
                         randomBook === "psalms" ? "Salmos" : randomBook;
                         
        return {
          book: { name: bookName },
          chapter: parseInt(randomChapter),
          number: parseInt(randomVerse),
          text: bibleData[randomBook][randomChapter][randomVerse]
        };
      }
      
      // If no local data available either, return a default verse
      return {
        book: { name: "João" },
        chapter: 3,
        number: 16,
        text: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna."
      };
    }
  },

  /**
   * Busca por palavras na Bíblia
   * @param {string} version - A versão da bíblia
   * @param {string} word - A palavra a ser buscada
   * @returns {Promise} - Promessa com os resultados da busca
   */
  async searchWord(version = "nvi", word) {
    try {
      const response = await axios.get(`${API_BASE_URL}/verses/search`, {
        params: { version, search: word }
      });
      return response.data;
    } catch (error) {
      console.error("Erro na busca por palavra:", error);
      throw error;
    }
  }
};

export default BibleService;
