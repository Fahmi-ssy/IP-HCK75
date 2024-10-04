const { GoogleGenerativeAI } = require("@google/generative-ai");


class GeminiController {
    static async gemini(req,res,next){
        try {
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
            const genAI = new GoogleGenerativeAI(process.env.API_KEY);
            
            const prompt = "Write a seiko watch description";
            const result = await model.generateContent(prompt);
            res.send(result.response.text());
        } catch (error) {
            next(error);
        }
    }
}
module.exports = GeminiController;

// console.log(result.response.text());