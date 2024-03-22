import { createContext, useState, useReducer } from "react";
import axios from "axios";

export const CartContext = createContext({
  postProduct: () => {},
  getAllProducts: () => {},
  updateProduct: () => {},
  deleteProduct: () => {},
  formatter: () => {},
});

export default function CartContextProvider({ children }) {
  const baseURL = "https://65f44b1ff54db27bc0215106.mockapi.io";

  async function postProduct(product) {
    await axios.post(`${baseURL}/products/`, product);
  }

  const getAllProducts = async () => {
    try {
      const response = await axios.get(`${baseURL}/products/`);
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  };

  const getProductById = async (productId) => {
    try {
      const response = await axios.get(`${baseURL}/products/${productId}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching product:", error);
      throw error;
    }
  };

  const updateProduct = async (productId, productData) => {
    try {
      const response = await axios.put(
        `${baseURL}/products/${productId}`,
        productData
      );
      return response.data;
    } catch (error) {
      console.error("Error updating product:", error);
      throw error;
    }
  };

  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`${baseURL}/products/${productId}`);
    } catch (error) {
      console.error("Error deleting product:", error);
      throw error;
    }
  };

  const formatter = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const ctxValue = {
    postProduct: postProduct,
    getAllProducts: getAllProducts,
    updateProduct: updateProduct,
    deleteProduct: deleteProduct,
    formatter: formatter,
  };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}
