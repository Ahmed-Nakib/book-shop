/* eslint-disable @typescript-eslint/no-explicit-any */
import { HiHeart } from "react-icons/hi2";

function ProductDetailsPopup({closePopup} :{closePopup: () => any}) {
    return ( 
        <div className="fixed top-0 left-0 w-full h-screen bg-white/30 backdrop-blur-md flex items-center justify-center">
            <div className="flex w-8/12 gap-x-3.5 border bg-white border-gray-300 overflow-hidden rounded-md">
                <div className="w-9/12 p-2">
                    <h2 className="text-3xl font-bold">Prenlter Prestion Pssquik</h2>
                    <span className="text-sm text-gray-500">Comedy/Drama</span>
                    <p className="mt-2 text-justify">When I Feel Alone is a deeply introspective story that explores themes of isolation, connection, and healing. Through the protagonist's journey, readers are reminded of the importance of reaching out and finding support in others.</p>
                    <div className="flex items-center justify-between mt-2.5">
                        <button className="bg-theme text-sm px-2 py-1.5 rounded-sm cursor-pointer">$140 | Add to cart</button>
                        <button className="border border-theme p-1.5 rounded-sm text-theme cursor-pointer"><HiHeart/></button>
                        <button onClick={() => closePopup()} className="bg-red-900 text-sm cursor-pointer px-2 py-1.5 rounded-sm">Close</button>
                    </div>
                </div>
                <div className="w-3/12">
                     <img className="w-full" src="/public/image.jpg" alt="" />
                </div>
            </div>
        </div>
     );
}

export default ProductDetailsPopup;