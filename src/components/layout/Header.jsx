import React from "react";
//import HeaderStyle from "../../styles/HeaderStyle"
import useFetch from "../../API/FetchUrl";
//import CircularProgress from '@mui/material/CircularProgress';
import { categories } from "../../API/Constant";
//import FooterStyle from "../Styles/FooterStyle";
import shopping from "../../assets/images/icons/shopping.svg";
import headerlogo from "../../assets/images/logo/headerlogo.svg";

export default function Header() {
  const { data, loading, hasError } = useFetch(categories);
  let dataRecieved = !loading && !hasError && !!data;
  return (
    <header className="flex-col justify-between bg-white w-full h-34 shadow-header py-4 px-10">
      <a href="/">
        <img
          src={headerlogo}
          height="60px"
          alt="logo"
          className="float-right"
        />
      </a>
      <div className="flex justify-between items-center">
        <img src={shopping} height="32px" alt="logo" />
        <ul className="flex gap-7 text-sm font-normal text-navColor leading-5 transition">
        {dataRecieved &&
          data.map((category) => {
            return (
              <li 
              className=" hover:text-primaryHover hover:font-bold transition"
              key={category.id}>
              {category.name}
            </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
