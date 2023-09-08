"use client";

import { FC } from "react";
import { ProductType } from "@/interfaces";
import Link from "next/link";
import CustomImage from "./image";

const Product: FC<{ product: ProductType }> = ({ product }) => {
  return (
    <Link
      href={`/product/${product.id}`}
      className="h-96 flex flex-col p-6 rounded-lg hover:scale-105 transition-transform ease-out duration-200 border"
    >
      <div className="relative flex-1 max-h-80">
        <CustomImage product={product} fill />
      </div>
      <h3 className="tracking-widest text-blue-700 text-xs mt-5 font-medium">
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
