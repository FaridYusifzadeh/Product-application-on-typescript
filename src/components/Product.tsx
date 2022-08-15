import React from "react";
import { Iproduct } from "../models";

interface ProductProps {
  product: Iproduct;
}

export function Product({ product }: ProductProps) {
  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      <img src={product.image} alt="product" className="w-1/6" />
      <p>{product.title}</p>
      <span className="font-bold">{product.price}</span>
      {/* <p>{product.description}</p> */}
    </div>
  );
}
