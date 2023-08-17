import React from "react";
import useFetch from "../API/FetchUrl";
import { categories } from "../API/Constant";
import CategoryCard from "../components/category/CategoryCard";

export default function CategoryPage() {
  //Fetching Data
  const { data, loading, hasError } = useFetch(categories);
  let dataRecieved = !loading && !hasError && !!data;
console.log("fjuijid",data)
  return (
    <>
      <section className="py-20 mx-13">
        <h2 className="float-right mb-24 font-bold text-xl leading-7">
          دسته بندی ها
        </h2>
        <section className="grid grid-cols-2 max-md:grid-cols-1 gap-16 pt-4 mt-24 w-full">
          {dataRecieved &&
            data?.map((category) => (
              <CategoryCard
                key={category.id}
                name={category.name}
                id={category.id}
              />
            ))}
        </section>
      </section>
    </>
  );
}
