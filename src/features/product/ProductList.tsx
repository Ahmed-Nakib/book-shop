import ProductCart from "./prodactCart";

const ProductList = () => {
  return (
    <div className="w-[calc(100%-220px)] ml-auto grid grid-cols-5 gap-3 overflow-y-scroll no-scrollbar">
      <ProductCart />
      <ProductCart />
      <ProductCart />
      <ProductCart />
      <ProductCart />
      <ProductCart />
      <ProductCart />
    </div>
  );
};

export default ProductList;
