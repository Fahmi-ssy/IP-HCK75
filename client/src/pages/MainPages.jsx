import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";
import UserSidebar from "../components/UserSideBat";

export default function MainPages() {
  
    return (
        <>
        <div className="flex flex-row items-center justify-center">
            {/* <UserSidebar/> */}
            {/* <Sidebar/> */}
            <div className="flex flex-col items-start">
                <Navbar/>
                <ProductList/>
            </div>
        </div>
        </>
    ) 


}