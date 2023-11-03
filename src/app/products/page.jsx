import axios from "axios";
import ProductCard from "@/components/productCard";

async function loadProducts() {
  const { data } = await axios.get("http://localhost:3000/api/products");
  return data;
}

async function ProductsPage() {
  const prodcuts = await loadProducts();
  return (
    <div className="grid gap-4 grid-cols-4 text-black">
      {prodcuts.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}

export default ProductsPage;
