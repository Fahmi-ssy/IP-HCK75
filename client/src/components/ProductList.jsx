import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { InventoryApi } from "../helper/http.client";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get("http://localhost:3000/home");
        setProducts(response.data.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete this product? This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await InventoryApi.delete(`/home/${id}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          });

          setProducts(products.filter((product) => product.id !== id));

          Swal.fire("Deleted!", "The product has been deleted.", "success");
        } catch (err) {
          console.error("Failed to delete product:", err.message);
          Swal.fire("Error", "Failed to delete the product. Please try again.", "error");
        }
      }
    });
  };

  const handleGemini = async (id) => {
    try {
      const { data } = await InventoryApi({
        url: `http://localhost:3000/home/history`,
        method: "POST",
        data: { title: products.find((product) => product.id === id).title },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });

      
      Swal.fire({
        title: "Product Summary",
        html: `<div style="text-align: left; max-height: 300px; overflow-y: auto;">
                <p>${data.summary}</p>
               </div>`,
        icon: "info",
        confirmButtonText: "Close",
      });
    } catch (error) {
      console.error("Failed to fetch summary:", error);
      Swal.fire("Error", "Failed to fetch the summary. Please try again.", "error");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="font-[sans-serif] p-4 mx-auto lg:max-w-5xl sm:max-w-2xl max-w-md">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
        Chrono Cart Product List
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products &&
          products.map((product) => (
            <div key={product.id} className="bg-gray-50 rounded-md cursor-pointer">
              <div className="w-full h-96">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-cover object-top hover:scale-110 transition-all"
                />
              </div>
              <div className="p-6">
                <div className="mb-6 flex items-center justify-center flex-wrap gap-4">
                  <h3 className="text-lg font-bold text-gray-800">{product.title}</h3>
                  <p className="text-lg text-blue-600 font-bold">${product.price}</p>
                </div>
                <div className="flex justify-between">
                  <Link
                    to={`/update/${product.id}`} 
                    className="w-full mr-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 font-bold text-white rounded-lg text-center"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    onClick={() => handleDelete(product.id)}
                    className="w-full mr-2 px-5 py-2.5 bg-red-600 hover:bg-red-700 font-bold text-white rounded-lg"
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    onClick={() => handleGemini(product.id)}
                    className="w-full px-5 py-2.5 bg-green-600 hover:bg-green-700 font-bold text-white rounded-lg"
                  >
                    Gemini
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
