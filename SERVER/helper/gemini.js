const { GoogleGenerativeAI } = require("@google/generative-ai");
// const { InventoryApi } = require("../../client/src/helper/http.client");

async function gemini(title) {
  
  const genAI = new GoogleGenerativeAI(process.env.API_KEY);
  
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  
//   let price =  JSWON.stringify(await InventoryApi.findAll({include: {model: "Watches"}}));

  
  
  const prompt = `Tell me about the summary of origin of ${title}  and response must be a json formay, create without \`\`\`json and \`\`\``      
  const result = await model.generateContent(prompt);
  
  
  return (JSON.parse(result.response.text().trim()));
}

module.exports = gemini


// console.log(result.response.text());