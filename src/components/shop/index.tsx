import React, { useEffect, useState } from "react";

interface Product {
  code: string;
  name: string;
  price: number;
  media_url: string;
  stock: number;
}

interface CartItem {
  quantity: number;
  product: Product;
}

interface ApiResponse extends Array<CartItem> {}

const Shop = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const fetchCartItems = async (): Promise<CartItem[]> => {
    const url = "https://spe-academy.spesolution.com/api/recruitment";
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer o7Ytbt9XQLI3PgtebJfKSXKEf0XHU74Y",
    };

    try {
      const response = await fetch(url, { method: "GET", headers });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: ApiResponse = await response.json();
      return data;
    } catch (error) {
      console.error("Fetching cart items failed", error);
      return [];
    }
  };

  useEffect(() => {
    fetchCartItems().then(setCartItems);
  }, []);

  const handleQuantityChange = (code: string, newQuantity: number) => {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.product.code === code
          ? {
              ...item,
              quantity:
                newQuantity <= item.product.stock ? newQuantity : item.quantity,
            }
          : item
      )
    );
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    );
  };

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-3xl font-bold text-center mb-20">
        SPE Frontend Shop
      </h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-spe-black text-white">
              <th></th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(({ quantity, product }) => (
              <tr key={product.code}>
                <td className="p-2">
                  <img
                    src={product.media_url}
                    alt={product.name}
                    className="w-36 object-cover m-auto"
                  />
                </td>
                <td>
                  <p className="text-spe-blue text-xs font-semibold">
                    {product.code}
                  </p>
                  <p>{product.name}</p>
                  <p className="text-gray-500 text-sm">
                    IDR {product.price.toLocaleString()}
                  </p>
                  <p className="text-red-500 text-sm">
                    {product.stock} in stock
                  </p>
                </td>
                <td>
                  <div className="w-16 h-10 border rounded-lg flex items-center justify-center">
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) =>
                        handleQuantityChange(
                          product.code,
                          parseInt(e.target.value)
                        )
                      }
                      className="w-full text-center focus:outline-none"
                      min="1"
                      max={product.stock}
                    />
                  </div>
                </td>
                <td>IDR {(product.price * quantity).toLocaleString()}</td>
              </tr>
            ))}
            <tr className="bg-black text-white">
              <td></td>
              <td></td>
              <td className="text-center">Total</td>
              <td>IDR. {calculateTotal().toLocaleString()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Shop;
