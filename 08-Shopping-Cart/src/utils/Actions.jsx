import axios from "axios";
import { useEffect, useState } from "react";

const url = "https://65f44b1ff54db27bc0215106.mockapi.io/products/";
export async function postProduct(product) {
  await axios.post(url, product);
}
export async function deleteProduct(product) {
  await axios.delete(url + product.id);
}

export async function updateProduct(productID, product) {
  console.log(productID);
  fetch(`${url + productID}`, {
    method: "PUT", // or PATCH
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ ...product }),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      
    })
    .then((product) => {})
    .catch((error) => {
      // handle error
    });
}

export async function getProducts() {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}
