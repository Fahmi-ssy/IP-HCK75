import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/register", {
        username,
        email,
        password,
      });

      if (response.data) {        
        localStorage.setItem("userToken", response.data.token);        
        navigate("/login");
      }
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div>
      <div className="font-[sans-serif] relative">
        <div className="h-[240px] font-[sans-serif]">
          <img
            src="https://www.thewosgroupplc.com/media/3rnjabsn/rolex_2_header.jpg?center=0.58576628329273361,0.49821249436144643&mode=crop&width=1920&height=488&rnd=132409357033900000"
            alt="Banner Image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative -mt-40 m-4">
          <form
            className="bg-white max-w-xl w-full mx-auto shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-8 rounded-2xl"
            onSubmit={handleRegister}
          >
            <div className="mb-12">
              <h3 className="text-gray-800 text-3xl font-bold text-center">
                Register
              </h3>
            </div>
            <div>
              <label className="text-gray-800 text-xs block mb-2">
                Username
              </label>
              <div className="relative flex items-center">
                <input
                  name="name"
                  type="text"
                  required=""
                  className="w-full bg-transparent text-sm text-gray-800 border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
                  placeholder="Enter name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-8">
              <label className="text-gray-800 text-xs block mb-2">Email</label>
              <div className="relative flex items-center">
                <input
                  name="email"
                  type="text"
                  required=""
                  className="w-full bg-transparent text-sm text-gray-800 border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-8">
              <label className="text-gray-800 text-xs block mb-2">
                Password
              </label>
              <div className="relative flex items-center">
                <input
                  name="password"
                  type="password"
                  required=""
                  className="w-full bg-transparent text-sm text-gray-800 border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className="w-full shadow-xl py-2.5 px-5 text-sm font-semibold tracking-wider rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none transition-all"
              >
                Register
              </button>
              <p className="text-gray-800 text-sm mt-8 text-center">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-blue-500 font-semibold hover:underline ml-1"
                >
                  Login here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
