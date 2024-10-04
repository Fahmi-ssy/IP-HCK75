import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Gemini() {
  const navigate = useNavigate();
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleGemini = async () => {
    try {
      const response = await axios.post("http://localhost:3000/gemini", {
        prompt: prompt,
      });
      setResponse(response.data);
    } catch (error) {
      console.error(error, "Gemini is on Maintaince");
    }
  };

  return (
    <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] p-6 w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
      <h3 className="text-xl font-bold text-gray-800">Ask Gemini</h3>
      <p className="mt-3 text-sm text-gray-500 leading-relaxed">
        Enter a prompt to send to the Gemini server and receive a response.
      </p>
      <div className="relative flex items-center px-1 bg-gray-50 border-2 focus-within:border-[#007bff] focus-within:bg-white rounded-lg mt-6">
        <input
          type="text"
          placeholder="Enter your prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)} // Controlled input
          className="p-3 text-gray-800 w-full text-sm bg-transparent outline-none"
        />
        <button
          onClick={handleGemini} // Send the prompt to Gemini
          type="button"
          className="px-5 py-2.5 rounded-lg text-white text-sm tracking-wider border-none outline-none bg-blue-600 hover:bg-blue-700"
        >
          Send
        </button>
      </div>
      {response && (
        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <h4 className="text-md font-semibold">Response:</h4>
          <p className="text-gray-700">{response}</p>
        </div>
      )}
    </div>
  );
}
