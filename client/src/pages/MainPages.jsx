import Cart from "../components/Cart";
import Gemini from "../components/Gemini";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";
import UserSidebar from "../components/UserSideBat";

export default function MainPages() {
  
    return (
        <>
            <div className="flex flex-col h-screen">
                {/* Navbar at the top */}
                <Navbar />

                {/* Main content with sidebar, page content, and cart */}
                <div className="flex flex-row h-full">
                    {/* Sidebar Section (on the left) */}
                    <UserSidebar className="h-full" />
                    

                    {/* Main Content */}
                    <div className="flex flex-col flex-grow ">
                        <div className="p-4 overflow-auto h-full">
                            {/* The main content area (ProductList) */}
                            <ProductList />
                        </div>
                    </div>

                     
                    {/* Cart Section (on the right) */}
                    <div >
                        {/* Your Cart component goes here */}
                        <Cart />
                    </div>
                </div>
            </div>
        </>
        
    ) 


}