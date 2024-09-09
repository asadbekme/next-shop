"use client";

import { FC, useState } from "react";
import Image from "next/image";
import { ProductType } from "@/interfaces";
import { cn } from "@/lib/utils";

interface CustomImageProps {
  product: ProductType;
  fill?: boolean;
}

const CustomImage: FC<CustomImageProps> = ({ product, fill }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {fill ? (
        <Image
          src={product.image}
          alt={product.title}
          fill
          className={cn("object-contain duration-700 ease-in-out group-hover:opacity-75", isLoading ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0")}
          onLoad={() => setIsLoading(false)}
        />
      ) : (
        <Image
          src={product.image}
          alt={product.title}
          width={250}
          height={200}
          className={cn("object-contain duration-700 ease-in-out group-hover:opacity-75", isLoading ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0")}
          onLoad={() => setIsLoading(false)}
        />
      )}
    </>
  );
};

export default CustomImage;
