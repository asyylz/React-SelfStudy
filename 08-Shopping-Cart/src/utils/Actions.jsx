import axios from "axios";

const baseURL = "https://65f44b1ff54db27bc0215106.mockapi.io";
export async function postProduct(product) {
  await axios.post(`${baseURL}/products/`, product);
}

export const getAllProducts = async () => {
  try {
    const response = await axios.get(`${baseURL}/products/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const getProductById = async (productId) => {
  try {
    const response = await axios.get(`${baseURL}/products/${productId}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};

export const updateProduct = async (productId, productData) => {
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

export const deleteProduct = async (productId) => {
  try {
    await axios.delete(`${baseURL}/products/${productId}`);
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  }
  getAllProducts();
};
