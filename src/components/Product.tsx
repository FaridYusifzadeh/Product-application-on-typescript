import { useState } from "react";
import { Iproduct } from "../models";

interface ProductProps {
  product: Iproduct;
}

export function Product({ product }: ProductProps) {
  const [details, setDetails] = useState(false);
  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      <img src={product.image} alt="product" className="w-1/6" />
      <p>{product.title}</p>
      <span className="font-bold">{product.price} $</span>
      <button
        className={`py-2 px-4 border bg-${details ? "blue" : "yellow"}-400`}
        onClick={() => setDetails((prev) => !prev)}
      >
        {details ? "Hide details" : "Show details"}
      </button>
      {details && (
        <div>
          <p>{product.description}</p>
          <p>
            Rate:
            <span style={{ fontWeight: "bold" }}>
              {product.rating.rate}
            </span>{" "}
          </p>
        </div>
      )}
    </div>
  );
}
