import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    setUser(storedUser);
  }, []);

  return (
    <nav className="bg-black h-screen fixed top-0 left-0 min-w-[260px] py-6 px-4 font-[sans-serif] flex flex-col overflow-auto">
      <div className="flex flex-wrap flex-col justify-center items-center cursor-pointer">
        <div className="bg-gray-300 w-12 h-12 rounded-full flex items-center justify-center font-bold text-black text-xl">
          <span>{user ? user.initial : 'S'}</span>
        </div>
        <div className="text-center mt-4">
          <p className="text-base text-white">{user ? user.name : 'Cashier 1'}</p>
          <p className="text-xs text-gray-300 mt-0.5">{user ? user.email : 'Cashier1@gmail.com'}</p>
        </div>
      </div>
      <hr className="mt-6 border-gray-600" />
      <div className="flex flex-col mt-4 space-y-4">
        <Link 
          to="/create" 
          className="text-white text-base hover:text-blue-400 transition-colors"
        >
          Create Inventory
        </Link>
        <Link 
          to="/update" 
          className="text-white text-base hover:text-blue-400 transition-colors"
        >
          Update Inventory
        </Link>
      </div>
      <hr className="my-8 border-gray-600" />
    </nav>
  );
}
