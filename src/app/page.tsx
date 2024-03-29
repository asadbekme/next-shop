import React from "react";
import { ProductType } from "@/interfaces";
import ProductCard from "@/components/product-card";
import Hero from "@/components/hero";
import CTA from "@/components/cta";
import Statistics from "@/components/statistics";

const HomePage = async () => {
  const response = await fetch(`https://fakestoreapi.com/products`);
  const products: ProductType[] = await response.json();

  return (
    <main className="min-h-screen max-w-7xl mx-auto px-8 xl:px-0">
      {/* Hero section */}
      <Hero />
      {/* Products section */}
      <section className="flex flex-col space-y-12">
        <h1 className="text-5xl font-bold text-center">NEXT SHOP DEALS</h1>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {/* CTA section */}
        <CTA />
        {/* Statistics section */}
        <Statistics />
      </section>
    </main>
  );
};

export default HomePage;
