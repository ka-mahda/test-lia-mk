import React, {useState, useEffect, useRef} from "react";
import useFetch from "../../API/FetchUrl";
import { categories } from "../../API/Constant";
import shopping from "../../assets/images/icons/shopping.svg";
import headerlogo from "../../assets/images/logo/headerlogo.svg";
import ShoppingModal from "../product/shopping/ShoppingModal";
import styles from "../product/shopping/styles.module.css";

export default function Header() {
  const [showShoppingCard, setShowShoppingCard] = useState(false);
  const [mouseOverModal, setMouseOverModal] = useState(false);
  const modalRef = useRef(null);
  const { data, loading, hasError } = useFetch(categories);
  let dataRecieved = !loading && !hasError && !!data;

  useEffect(() => {
    if (!mouseOverModal && showShoppingCard) {
      const timeout = setTimeout(() => {
        setShowShoppingCard(false);
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [mouseOverModal, showShoppingCard]);
  return (
    <header className="flex-col justify-between bg-white w-full h-34 shadow-header py-4 px-10 relative">
      <a href="/" className={`${styles.cartButton}`}>
        <img
          src={headerlogo}
          height="60px"
          alt="logo"
          className="float-right"
        />
      </a>
      <div className="flex justify-between items-center">
        <div
          onMouseOver={() => setShowShoppingCard(true)}
          onMouseOut={() => setMouseOverModal(false)}
        >
          <img src={shopping} height="32px" alt="logo" />
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
      {showShoppingCard && (
        <div
          ref={modalRef}
          className="z-50 absolute top-full left-4 mt-5"
          onMouseOver={() => setMouseOverModal(true)}
          onMouseOut={() => setMouseOverModal(false)}
        >
          <ShoppingModal />
        </div>
      )}
    </header>
  );
}

