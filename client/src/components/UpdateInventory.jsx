import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InventoryApi } from "../helper/http.client";

export default function UpdateInventory({ inventoryId }) {
  const navigate = useNavigate();

  const [name, setName] = useState("Casio LNV");
  const [imageUrl, setImageUrl] = useState("url");
  const [price, setPrice] = useState(40000000);
  const [category, setCategory] = useState("Watches");
  const [rating, setRating] = useState(2);
  const [description, setDescription] = useState("is cool and pricey");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const inventoryData = {
      name,
      imageUrl,
      price,
      category,
      rating,
      description,
    };

    try {
      const response = await InventoryApi.put(`/home/:id`, {inventoryData},{
        
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Inventory updated successfully:", data);
      navigate("/");
    } catch (error) {
      console.error("Failed to update inventory:", error);
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Update Watch Inventory
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
            <div className="sm:col-span-2">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Watch Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Type product name"
                required
              />
            </div>
            <div className="w-full">
              <label htmlFor="imageUrl" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Watch Image URL
              </label>
              <input
                type="text"
                name="imageUrl"
                id="imageUrl"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="Enter image URL"
                required
              />
            </div>
            <div className="w-full">
              <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Price
              </label>
              <input
                type="number"
                name="price"
                id="price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                placeholder="$299"
                required
              />
            </div>
            <div>
              <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Category
              </label>
              <select
                id="category"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="Watches">Watches</option>
                <option value="Jewelry">Jewelry</option>
              </select>
            </div>
            <div>
              <label htmlFor="rating" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Rating (1-5)
              </label>
              <input
                type="number"
                name="rating"
                id="rating"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
                placeholder="Enter rating"
                required
                min="1"
                max="5"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Description
              </label>
              <textarea
                id="description"
                rows={8}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Write a product description here..."
                required
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button
              type="submit"
              className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Update Watch
            </button>
            <button
              type="button"
              className="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
            >
              <svg
                className="w-5 h-5 mr-1 -ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              Delete
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
