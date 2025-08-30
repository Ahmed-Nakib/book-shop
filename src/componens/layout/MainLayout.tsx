
import { useState } from "react";
import ProductList from "../../features/product/ProductList";
import Footer from "./Footer";
import Header from "./Header";
import LeftSidebar from "./LeftSidebar";
import type { IProduct } from "../../features/product/data";
import type { ICart } from "../../interfaces/interface";


function MainLayout() {

    const [carts, setCarts] = useState<ICart[]>([]);
    const handleSetCarts = (cart: IProduct) => {


        const newCart: ICart = {
            id: cart.id,
            name: cart.name,
            price: cart.price,
            quantity: 1,
            total () {
                return this.price * this.quantity;
            }
        }
console.log(newCart);

const isCartItemExists = carts.find(item => item.id === newCart.id);
        if (!isCartItemExists) {
            
                    setCarts([
                        ...carts,
                        newCart
                    ]);
                }
    }
    
    return (
        <>
            <Header carts={carts} />
            <div className="">
                <div className="flex relative h-[calc(100vh-100px)]">
                    <LeftSidebar />
                    <ProductList setCarts={handleSetCarts}></ProductList>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default MainLayout;