import React from "react";
import useFetch from "../API/FetchUrl";
//import CircularProgress from '@mui/material/CircularProgress';
import ProductCard from "../components/product/ProductCard";
import { useParams } from "react-router-dom";

export default function ProductPage() {
  let param = useParams();
  let products = `https://shopapi.liateam.com/api/rest/v1/get_product?categories=${param.id}`;

  //Fetching Data
  const { data, loading, hasError } = useFetch(products);
  let dataRecieved = !loading && !hasError && !!data;
  return (
    <>
      <section className="py-20 mx-13">
        <div className="max-w-6.5xl">
          <h2 className="float-right mb-24 font-bold text-xl leading-7">
            {data?.list?.[0].categories?.find((a) => a.id == param.id)?.name}
          </h2>
          <section className="grid justify-items-center grid-cols-5 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-16 pt-4 mt-24 w-full ">
            {dataRecieved &&
              data.list.map((product, index) => {
                return (
                  <ProductCard
                    large_pic={product.large_pic}
                    key={index}
                    title={product.title}
                    final_price={product.price.final_price}
                    id={product.id}
                  />
                );
              })}
          </section>
        </div>
      </section>
    </>
  );
}
