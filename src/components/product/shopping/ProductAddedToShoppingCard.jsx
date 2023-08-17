import React from "react";
import { separateNumberByThousand } from "../../../helpers/Number";
import productShopSample from "../../../assets/images/productsSample/image 38.png";
import plus from "../../../assets/images/icons/plus.svg";
import minus from "../../../assets/images/icons/minus.svg";
import close from "../../../assets/images/icons/Close.svg";
import { useDispatch } from "react-redux";
import { increaseAmount, removeItem, decreaseAmount } from "../../../redux/slice/cartReducer";

export default function ProductAddedToShoppingCard({ title, id, price, amount, discountCard, final_price }) {
  const dispatch = useDispatch();  

  const handleIncreaseAmount = () => {
    dispatch(increaseAmount({ id }));
  };

  const handleDecreaseAmount = () => {
    dispatch(decreaseAmount({ id }));
  };

  const handleRemoveItem = () => {
    dispatch(removeItem(id));
  };

  return (
    <section className="flex justify-between items-start bg-white w-[360px] m-5">
      <button onClick={handleRemoveItem}>
        <img src={close} className="mt-4" alt="" />
      </button>
      <div className="flex justify-between items-center">
        <div className="flex-col items-center">
          <p className="text-sm font-normal text-center">{title}</p>
          <div className="flex justify-between items-center w-[88px] h-8 bg-mainBg my-4 rounded">
            <button onClick={handleIncreaseAmount}>
              <img src={plus} alt="" />
            </button>
            <p className="text-base font-bold">{amount}</p>
            <button onClick={handleDecreaseAmount}>
              <img src={minus} alt="" />
            </button>
          </div>
          <p className="text-primaryText text-lg"> {separateNumberByThousand(price)}تومان</p>
        </div>
        <img src={productShopSample} className="ml-7" alt="productShop" />
      </div>
    </section>
  );
}
