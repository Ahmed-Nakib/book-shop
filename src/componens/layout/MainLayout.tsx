import ProductList from "../../features/product/ProductList";
import Footer from "./Footer";
import Header from "./Header";
import LeftSidebar from "./LeftSidebar";

function MainLayout() {
    return (
        <>
            <Header />
                <div className="h-[calc-(100vh-100px)]">
                    <div className="flex relative h-[calc(100vh-100px)]">
                        <LeftSidebar/>
                        <ProductList/>

                    </div>
                </div>
            <Footer />
        </>
    );
}

export default MainLayout;