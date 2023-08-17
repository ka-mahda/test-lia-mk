import React from "react";
import categorySample from "../../assets/images/categorySample/Rectangle 40.png";

//import { Link } from "react-router-dom";

export default function CategoryCard({ name }) {
  return (
    <>
      {/*<Link to={`/${props.id}`}>*/}
      <figure className="w-full flex-col cursor-pointer">
        <img className="z-10" src={categorySample} alt="" />
        <figcaption className="bg-[#ddd] flex-center w-full py-3 text-lg z-20 -mt-6 rounded-b-md">
          {name}
        </figcaption>
      </figure>
      {/* </Link>*/}
    </>
  );
}
