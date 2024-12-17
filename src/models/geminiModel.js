const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require("dotenv");

dotenv.config();

const API_Key = process.env.Gemini_API_KEY;

if (!API_Key) {
    throw new Error("Gemini_API_KEY is not defined in the environment variables.");
}

const genAI = new GoogleGenerativeAI(API_Key);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const refineSearch = async (query) => {
    try {
        const result = await model.generateContent(
            `Suggest better search terms for: ${query}`
        );
      return result.data.text().trim();
    } catch (error) {
        console.error("Error refining search terms:", error);
        throw error;
    }
};

module.exports = { refineSearch };