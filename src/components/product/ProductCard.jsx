import React from "react";
//import { Link } from "react-router-dom";
import shoppingCard from "../../assets/images/icons/shopping-cart.svg";
import productSample from "../../assets/images/productsSample/image 40.png";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/slice/cartReducer";

export default function ProductCard({ final_price, title, large_pic, id }) {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  console.log(cartItems);

  function handleAddProduct() {
    const product = {
      id,
      title,
      price: final_price,
    };
    dispatch(addToCart(product));
  }

  return (
    <>
      <div className="flex-col justify-between cursor-pointer rounded-2xl p-4 bg-white w-204">
        <img src={productSample} alt="" />
        <div className="tex-base font-bold leading-6 my-4 text-center">
          {title}
        </div>
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={handleAddProduct}
            className="rounded-full bg-[#f7f7f7] p-2"
          >
            <img src={shoppingCard} height="18px" alt="logo" />
          </button>
          <div className="flex">
            <p className="text-primaryText font-bold text-xl">تومان</p>
            <p className="text-primaryText font-bold text-xl">{final_price}</p>
          </div>
        </div>
      </div>
    </>
  );
}
