import Link from "next/link";
import React from "react";

function ProductCard({ product }) {
  return (
    <Link href={`/products/${product.id}`} className="bg-white rounded-lg border border-gray-800 mb-3 p-4 hover:bg-gray-100 hover:cursor-pointer transition-all duration-300">
      <h1 className="text-lg font-bold">{product.name}</h1>
      <h2 className="text-2xñ text-slate-600">{product.price}</h2>
      <p>{product.description}</p>
    </Link>
  );
}

export default ProductCard;
