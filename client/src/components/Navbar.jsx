

export default function Navbar(){
    return(
        <header className="flex bg-white border-b py-4 sm:px-8 px-6 font-[sans-serif] min-h-[80px] tracking-wide relative z-50">
  <div className="flex flex-wrap items-center lg:gap-y-2 gap-80 w-full">
    <a href="javascript:void(0)" className="flex flex-row items-center gap-8">
      <img 
        src="/public/logo.jpg"
        alt="logo"
        className="w-20 rounded-full"
      />
      <div className="font-medium text-2l">
         Chrono Cart
      </div>
    </a>    
    <div className="flex gap-80 ">
    
      <div className="flex border-2 focus-within:border-gray-400 rounded-full px-6 py-3 overflow-hidden max-w-52 max-lg:hidden">
        <input
          type="text"
          placeholder="Search category or menu"
          className="w-full text-sm bg-transparent outline-none pr-2"
        />
        
      </div>
      <div className="flex items-center space-x-8">       
        
        <button className="px-5 py-2 text-sm rounded-full text-white border-2 border-[#b91c1c] bg-[#0c0a09] hover:bg-[#b91c1c]">
          Sign Out 
        </button>
        <button id="toggleOpen" className="lg:hidden">
          <svg
            className="w-7 h-7"
            fill="#333"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</header>

    )
}