import { useState } from "react";
import { useEffect } from "react";


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
      <hr className="my-8 border-gray-600" />
    </nav>
  );
}


