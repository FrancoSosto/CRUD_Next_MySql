import axios from "axios";

async function loadProduct(productId) {
  const { data } = await axios.get(
    `http://localhost:3000/api/products/${productId}`
  );
  return data;
}

async function ProductPage({ params }) {
  const product = await loadProduct(params.id);
  console.log(product);

  return (
    <section className="flex justify-center items-center rounded">
      <div className="text-black p-6 bg-white">
        <p>Name: {product.name}</p>
        <p>Price: {product.price}</p>
        <p>Description: {product.description}</p>
        <div className="flex gap-2 justify-end mt-2">
          <button className="text-white bg-red-500 hover:bg-red-700 py-2 px-3 rounded transition-all duration-300 ease-in-out">
            Delete
          </button>
          <button className="text-white bg-gray-500 hover:bg-gray-700 py-2 px-3 rounded transition-all duration-300 ease-in-out">
            Edit
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProductPage;
