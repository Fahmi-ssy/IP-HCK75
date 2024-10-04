import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { InventoryApi } from "../helper/http.client";

export default function ProductList(){

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get('http://localhost:3000/home');
        // console.log(response.data); // Log the response to check its structure
        setProducts(response.data.data)
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);
  console.log(products ,"------------------");
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  
  return (
    <div className="font-[sans-serif] p-4 mx-auto lg:max-w-5xl sm:max-w-2xl max-w-md">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
        Chrono Cart Product List
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products && products.map((product) => (

          <div key={product.id} className="bg-gray-50 rounded-md  cursor-pointer">
            <div className="w-full h-96 ">
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
              <button
                type="button"
                className="w-full px-5 py-2.5 bg-blue-600 hover:bg-blue-700 font-bold text-white rounded-lg"
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}