"use client";

import { FC } from "react";
import { ProductType } from "@/interfaces";
import Link from "next/link";

const Product: FC<{ product: ProductType }> = ({ product }) => {
  console.log(product);

  return (
    <Link
      href={`/product/${product.id}`}
      className="h-96 flex flex-col p-6 rounded-lg hover:scale-105 transition-transform ease-out duration-200 border"
    >
      <img
        className="h-40 rounded w-full object-cover object-center mb-6"
        src="https://dummyimage.com/720x400"
        alt="content"
      />
      <h3 className="tracking-widest text-blue-700 text-xs font-medium">
        {product.category}
      </h3>
      <div className="font-semibold flex items-center justify-between mt-4 mb-2">
        <p className="w-44 truncate">{product.title}</p>
        <p>${product.price}</p>
      </div>
      <p className="leading-relaxed text-base line-clamp-3">
        {product.description}
      </p>
    </Link>
  );
};

export default Product;
