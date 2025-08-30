
import { MdDeleteForever } from "react-icons/md";
import type { ICart } from "../../interfaces/interface";



const CartItem = ({cart}: {cart: ICart}) => {
    return (
        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
            <td scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                {cart.name}
            </td>
            <td className="px-6 py-4">
                $ {cart.price}
            </td>
            <td className="px-6 py-4">
                <button className="bg-blue-950 mx-1 rounded-full px-1 text-sm font-semibold text-white cursor-pointer">-</button>
               {cart.quantity}
               <button className="bg-blue-950 mx-1 rounded-full px-1.5 text-sm font-semibold text-white cursor-pointer">+</button>
            </td>
            <td className="px-6 py-4">

               {cart.total()}
            </td>
            <td className="px-6 py-4">
                <MdDeleteForever className="text-xl text-red-500 cursor-pointer" />

            </td>
        </tr>
    )
}

export default CartItem;