import React from "react";
import { separateNumberByThousand } from "../../../helpers/Number";
import ProductAddedToShoppingCard from "./ProductAddedToShoppingCard";
import { useSelector } from "react-redux";

export default function ShoppingModal() {
  const products = useSelector((state) => state.cart);
  console.log("fsfksfokdfo", products);
  const totalPrice =
   products && products.cartItems.reduce(
    (acc, product) =>
      acc + (product?.price) * product?.amount,
    0
  );

  return (
    <div className="bg-white rounded-2xl overflow-hidden" style={{zIndex:"1000000"}}>
      <div className="flex-col overflow-y-auto">
        {products.cartItems.map((product, index) => (
          <ProductAddedToShoppingCard key={index} {...product} />
        ))}
      </div>
      <div className="flex-col justify-between flex-wrap bg-[#D9D9D9] px-5 py-7 text-sm">
        <div className='flex justify-between items-center mb-5'>
          
          <span
            className='flex-center gap-1 font-semibold relative'>
            {separateNumberByThousand(totalPrice)}
          </span>
          <span className="text-xs font-semibold text-NeutralN100">جمع کل</span>
        </div>
        <div className='flex justify-between items-center'>
          <span className='flex-center gap-1 font-semibold relative'>
           {separateNumberByThousand(totalPrice)}
          </span>
          <span className="text-xs font-semibold text-NeutralN100">
            مبلغ قابل پرداخت
          </span>
        </div>
      </div>
    </div>
  );
}
