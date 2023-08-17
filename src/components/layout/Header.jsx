import React, {useState} from "react";
import useFetch from "../../API/FetchUrl";
import { categories } from "../../API/Constant";
import shopping from "../../assets/images/icons/shopping.svg";
import headerlogo from "../../assets/images/logo/headerlogo.svg";
import ShoppingModal from "../product/shopping/ShoppingModal";
import { useSelector } from "react-redux";
import styles from "../product/shopping/styles.module.css";



export default function Header() {
  const [showShoppingCard, setShowShoppingCard] = useState(false);
  const { data, loading, hasError } = useFetch(categories);
  let dataRecieved = !loading && !hasError && !!data;
  const products = useSelector((state) => state.cart);
  console.log("fff11",products)
  return (
    <header className="flex-col justify-between bg-white w-full h-34 shadow-header py-4 px-10">
      <a href="/" className={`${styles.cartButton}`}>
        <img
          src={headerlogo}
          height="60px"
          alt="logo"
          className="float-right"
        />
      </a>
      <div className="flex justify-between items-center">
      <div onMouseOver={() => setShowShoppingCard(true)} onMouseOut={() => setShowShoppingCard(false)}>
          <img src={shopping} height="32px" alt="logo" />
          {showShoppingCard && <ShoppingModal/>}
        </div>
        <ul className="flex gap-7 text-sm font-normal text-navColor leading-5 transition">
          {dataRecieved &&
            data.map((category) => {
              return (
                <a href={`/products/${category.id}`}>
                  <li
                    className=" hover:text-primaryHover hover:font-bold transition"
                    key={category.id}
                  >
                    {category.name}
                  </li>
                </a>
              );
            })}
        </ul>
      </div>
    </header>
  );
}
