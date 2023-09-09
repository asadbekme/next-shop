import { notFound } from "next/navigation";
import CustomImage from "@/components/image";
import { ProductType } from "@/interfaces";

interface ProductDetailProps {
  params: {
    id: string;
  };
}

const ProductDetailPage = async ({ params: { id } }: ProductDetailProps) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product: ProductType = await response.json();

    return (
      <div className="max-w-5xl mx-auto px-4 mt-48 pb-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <CustomImage product={product} />

          <div>
            <div className="space-y-2 pb-8">
              <h2 className="uppercase text-sm text-gray-500 tracking-widest">
                Brand name
              </h2>
              <h1 className="text-2xl md:text-4xl font-bold">
                {product.title}
              </h1>
              <h2 className="text-gray-500 font-bold text-xl md:text-3xl">
                ${product.price}
              </h2>
            </div>
            <p className="text-xs md:text-sm">{product.description}</p>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    notFound();
  }
};

export default ProductDetailPage;
