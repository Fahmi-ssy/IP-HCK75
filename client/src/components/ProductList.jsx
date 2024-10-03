
export default function ProductList(){




    
    return(
        <div className="font-[sans-serif] p-4 mx-auto lg:max-w-5xl sm:max-w-2xl max-w-md">
  <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
    Chrono Cart Prodcut List
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <div className="bg-gray-50 rounded-md overflow-hidden cursor-pointer">
      <div className="w-full overflow-hidden">
        <img
          src="https://readymadeui.com/images/product1.webp"
          alt="Product 1"
          className="h-full w-full object-cover object-top hover:scale-110 transition-all"
        />
      </div>
      <div className="p-6">
        <div className="mb-6 flex items-center justify-center flex-wrap gap-4">
          <h3 className="text-lg font-bold text-gray-800">Lexicon Luxe</h3>
          <p className="text-lg text-blue-600 font-bold">$10</p>
        </div>
        <button
          type="button"
          className="w-full px-5 py-2.5 bg-blue-600 hover:bg-blue-700 font-bold text-white rounded-lg"
        >
          Add to cart
        </button>
      </div>
    </div>    
  </div>
</div>

    )
}
