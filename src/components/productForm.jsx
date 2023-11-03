"use client";
import { useState, useRef } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

function ProductForm() {
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    description: "",
  });

  const form = useRef(null)
  const router = useRouter()

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post("/api/products", product);
    form.current.reset()
    router.push('/products')
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4"
      ref={form}
    >
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="name"
      >
        Product Name:
      </label>
      <input
        autoFocus
        name="name"
        className="text-black shadow appearance-none border rounded w-full py-2 px-3"
        type="text"
        placeholder="name"
        onChange={handleChange}
      />

      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="price"
      >
        Product price:
      </label>
      <input
        name="price"
        className="text-black shadow appearance-none border rounded w-full py-2 px-3"
        type="text"
        placeholder="00.00"
        onChange={handleChange}
      />

      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="description"
      >
        Product description:
      </label>
      <textarea
        name="description"
        className="text-black shadow appearance-none border rounded w-full py-2 px-3"
        rows={3}
        placeholder="description"
        onChange={handleChange}
      />
      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
        Guardar producto
      </button>
    </form>
  );
}

export default ProductForm;
