import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
        
        const { response } = await fetch("http://localhost:3000/login", {
          email: email,
          password: password
          })
          
          localStorage.setItem("token", response.data.data.token);    
          
        navigate("/");
    } catch (error) {
        console.log(error);
        
    }
};


  useEffect(() => {
    // Initialize the Google Sign-In button
    google.accounts.id.initialize({
      // to load the env in Vite project
      // please navigate to this doc -> https://vitejs.dev/guide/env-and-mode
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      // After the process is complete, the callback function will be called
      callback: async (response) => {
        console.log("Encoded JWT ID token: " + response.credential)
  
        // Here is the logic to send the credential to the server
        // You can use axios or fetch to send the credential to the server
        const { data } = await axios.post('http://localhost:3000/auth/google', {
          googleToken: response.credential,
        });
        localStorage.setItem('access_token', data.access_token);
  
        // navigate to the home page or do magic stuff
      },
    });
  
    // Render the Google Sign-In button
    google.accounts.id.renderButton(
      // The ID of the HTML element where the button will be rendered
      document.getElementById("buttonDiv"),
      // Customize the button attributes
      { theme: "outline", size: "large" }
    );
    // Display the One Tap dialog; comment out to remove the dialog
    google.accounts.id.prompt();
  }, []);    
    

  return (
    <div className="font-[sans-serif]">
      <div className="grid lg:grid-cols-2 md:grid-cols-2 items-center gap-4">
        <div className="max-md:order-1 h-screen min-h-full">
          <img
            src="https://www.vintagemasters.eu/wp-content/uploads/2024/07/20240709_vintagemasters_drop_juli_web-002.jpg"
            className="w-full h-full object-cover"
            alt="login-image"
          />
        </div>
        <form className="max-w-xl w-full p-6 mx-auto" onSubmit={handleLogin}>
          <div className="mb-12">
            <h3 className="text-gray-800 text-4xl font-extrabold">Sign in</h3>
            <p className="text-gray-800 text-sm mt-6">
              Don't have an account{" "}
              <Link
                to="/register"
                className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap"
              >
                Register here
              </Link>
            </p>
          </div>
          <div>
            <label className="text-gray-800 text-sm block mb-2">Email</label>
            <div className="relative flex items-center">
              <input
                name="email"
                type="text"
                required=""
                className="w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#bbb"
                stroke="#bbb"
                className="w-[18px] h-[18px] absolute right-2"
                viewBox="0 0 682.667 682.667"
              >
                <defs>
                  <clipPath id="a" clipPathUnits="userSpaceOnUse">
                    <path d="M0 512h512V0H0Z" data-original="#000000" />
                  </clipPath>
                </defs>
                <g
                  clipPath="url(#a)"
                  transform="matrix(1.33 0 0 -1.33 0 682.667)"
                >
                  <path
                    fill="none"
                    strokeMiterlimit={10}
                    strokeWidth={40}
                    d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                    data-original="#000000"
                  />
                  <path
                    d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                    data-original="#000000"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div className="mt-8">
            <label className="text-gray-800 text-sm block mb-2">Password</label>
            <div className="relative flex items-center">
              <input
                name="password"
                type="password"
                required=""
                className="w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#bbb"
                stroke="#bbb"
                className="w-[18px] h-[18px] absolute right-2 cursor-pointer"
                viewBox="0 0 128 128"
              >
                <path
                  d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                  data-original="#000000"
                />
              </svg>
            </div>
          </div>

          <div className="mt-12">
            <button
              type="button"
              className="w-full py-2.5 px-4 text-sm tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
            >
              Sign in
            </button>
          </div>
          <div className="my-6 flex items-center gap-4">
            <hr className="w-full border-gray-300" />
            <p className="text-sm text-gray-800 text-center">or</p>
            <hr className="w-full border-gray-300" />
          </div>
          <button
  type="button"
  
  className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
>
  <div id="buttonDiv" className="flex items-center">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
      alt="Google logo"
      className="w-5 h-5 mr-2"
    />
    Sign in with Google
  </div>
</button>
          
          
        </form>
      </div>
    </div>
  );
}
