import React from "react";
//import { Link } from "react-router-dom";
import shoppingCard from "../../assets/images/icons/shopping-cart.svg";
import productSample from "../../assets/images/productsSample/image 40.png";

export default function ProductCard({ final_price, title, large_pic }) {
  return (
    <>
      {/* <Link to={`/${props}`}>*/}
      <div className="flex-col justify-between cursor-pointer rounded-2xl p-4 bg-white max-h-xss w-204">
        <img src={productSample} alt="" />
        <div className="tex-base font-bold leading-6 my-4 text-center">
          {title}
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="rounded-full bg-[#f7f7f7] p-2">
            <img src={shoppingCard} height="18px" alt="logo" />
          </div>
          <div className="flex">
            <p className="text-primaryText font-bold text-xl">تومان</p>
            <p className="text-primaryText font-bold text-xl">{final_price}</p>
          </div>
        </div>
      </div>
      {/* </Link>*/}
    </>
  );
}
//  <>

// <figure className="w-full flex-col cursor-pointer">
//   <img className="z-10" src={categorySample} alt="" />
//   <figcaption className="bg-[#ddd] flex-center w-full py-3 text-lg z-20 -mt-2 rounded-b-md">{name}</figcaption>
// </figure>

// </>
