import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useEffect, useState } from "react";
import { themeModeHandler } from "../../utils/themeModeHandler";
import CartPopup from "../../features/cart/CartPopup";
import type { ICart } from "../../interfaces/interface";


function Header({ carts }: { carts: ICart[] }) {

    const [theme, setTheme] = useState("light-theme");

    const clickHandler = () => {

        setTheme((prev) => {
            if (prev == "dark-theme") {
                return "light-theme";
            } else {
                return "dark-theme"
            }
        })
    }

    useEffect(() => {
        themeModeHandler(theme);
    }, [theme])

    const [isOpen, setIsOpen] = useState(false);

    return (
       <>
       <header className="py-3 border-b border-b-gray-300 px-2">
           <div className="container mx-auto flex justify-between items-center">
               <span className="font-bold text-2xl text-theme">BOOK SELL</span>
               <div className="flex gap-x-2">
                   <button onClick={clickHandler} className="p-2 border border-gray-300 cursor-pointer rounded-md">
                       <MdOutlineLightMode className="dark:text-white" />
                   </button>
                   <button onClick={() => setIsOpen(true)} className="p-2 border border-gray-300 cursor-pointer rounded-md">
                       <MdOutlineShoppingCart className="dark:text-white" />
                   </button>
               </div>
           </div>
       </header>

       {isOpen && <CartPopup onClose={() => setIsOpen(false)} carts={carts}/>}
       </>
    );
}

export default Header;