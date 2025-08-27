import { useState } from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import ProductDetailsPopup from "./prodactDeatilsPopup";

function ProductCart() {
  const [isHovered, setIsHovered] = useState(false);

  const closePopup = () => {
    setIsHovered(false);
  };

  return (
    <div className="border border-gray-300 p-1">
      <img onClick={() => setIsHovered(!isHovered)} className="w-full" src="/public/image.jpg" alt="" />
      <h4 className="text-[14px] mb-1.5">Once Upon a Time... in Hollywood</h4>
      <span className="text-[12px] mb-1.5">Comedy/Drama</span>
      <span className="flex gap-x-1 mb-1.5">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
      <div className=" flex items-center justify-between mb-1.5">
        <button className=" bg-theme text-sm px-2 py-1.5 rounded-sm">$140 | Add to cart</button>
        <button className="border-2 border-theme px-2 py-1.5 rounded-sm"><FaHeart /></button>
      </div>
      {isHovered && <ProductDetailsPopup closePopup={closePopup} />}
    </div>
  );
}

export default ProductCart;
