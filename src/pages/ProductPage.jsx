import React from "react";
import useFetch from "../API/FetchUrl";
//import CircularProgress from '@mui/material/CircularProgress';
import ProductCard from "../components/product/ProductCard";
import { products } from "../API/Constant";

export default function ProductPage() {
  //Fetching Data
  const { data, loading, hasError } = useFetch(products);
  let dataRecieved = !loading && !hasError && !!data;

  //if (loading) return <CircularProgress color="secondary" />;
  // if (hasError) return <Alert severity="hasError">{hasError}</Alert>;

  console.log("pro", data);
  return (
    <>
      <section className="py-20 mx-13">
        <div className="max-w-6.5xl">
          <h2 className="float-right mb-24 font-bold text-xl leading-7">
            دسته بندی ها
          </h2>
          <section className="grid justify-items-center grid-cols-5 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-16 pt-4 mt-24 w-full ">
            {dataRecieved &&
              data.list.map((product) => {
                return (
                  <ProductCard
                    large_pic={product.large_pic}
                    title={product.title}
                    final_price={product.price.final_price}
                  />
                );
              })}
          </section>
        </div>
      </section>
    </>
  );
}
