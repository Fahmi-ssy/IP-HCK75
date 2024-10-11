import { useState } from "react";
import { InventoryApi } from "../helper/http.client";

export default function Gemini() {
  
  const [title, setTitle] = useState("");
  const [history, setHistory] = useState(null);

  
  const generateHistory = async (e) => {
    e.preventDefault();
    try {
      const { data } = await InventoryApi({
        url: "http://localhost:3000/home/history",
        method: "POST",
        data: {
          title: title,
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      setHistory(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter title"
      />
      
      
      <button onClick={generateHistory}>Generate History</button>
      
      
      {history && (
        <div>
          <h2>History</h2>
          <pre>{JSON.stringify(history, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
