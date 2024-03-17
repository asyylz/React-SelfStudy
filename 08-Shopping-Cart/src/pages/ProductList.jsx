import "bootstrap/dist/css/bootstrap.min.css";
import "./ProductList.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import {
  updateProduct,
  getAllProducts,
  deleteProduct,
  getProductById,
} from "../utils/Actions";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { MdAddCircleOutline } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import axios from "axios";

export default function ProductList() {
  const [updatedProduct, setUpdatedProduct] = useState(null);
  const url = "https://65f44b1ff54db27bc0215106.mockapi.io/products/";
  const [productsList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //ASK
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       if (updatedProduct) {
  //         await updateProduct(updatedProduct.id, updatedProduct);
  //         await getProducts(); // Await the getProducts call
  //       }
  //     };

  //     fetchData();
  //   }, [updatedProduct]);

  //OPTION2
  //   useEffect(() => {
  //     const fetchData = () => {
  //       if (updatedProduct) {
  //         updateProduct(updatedProduct.id, updatedProduct)
  //          .then(() => getAllProducts()); // Use then() instead of await
  //       }
  //     };
  //     fetchData();
  //   }, [updatedProduct]);

  //   useEffect(() => {
  //     getAllProducts()
  //       .then((products) => {
  //         setProductList(products);
  //         setLoading(false);
  //       })
  //       .catch((error) => {
  //         setError(error);
  //         setLoading(false);
  //       });
  //   }, [updatedProduct]);
  

  //ASK
  //   useEffect(() => {
  //     const fetchData = () => {
  //       try {
  //         if (updatedProduct) {
  //           updateProduct(updatedProduct.id, updatedProduct).then(() =>
  //             getAllProducts().then((products) => {
  //               setProductList(products);
  //               setLoading(false);
  //             })
  //           );
  //         }
  //         getAllProducts().then((products) => {
  //           setProductList(products);
  //           setLoading(false);
  //         });
  //       } catch (error) {
  //         setError(error);
  //         setLoading(false);
  //         console.error("Error fetching or updating products:", error);
  //       }
  //     };

  //     fetchData();
  //   }, [updatedProduct]);

  useEffect(() => {
    const fetchData = () => {
      const asiye = () =>
        getAllProducts().then((products) => {
          setProductList(products);
          setLoading(false);
        });
      try {
        updatedProduct
          ? updateProduct(updatedProduct.id, updatedProduct).then(() => asiye())
          : asiye();
      } catch (error) {
        setError(error);
        setLoading(false);
        console.error("Error fetching or updating products:", error);
      }
    };

    fetchData();
  }, [updatedProduct]);


  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }

  return (
    <Container className="container">
      <Row>
        <Col xs={12} md={8} className="product-section">
          <Table>
            <thead>
              <th>No</th>
              <th>Image</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
            </thead>
            <tbody>
              {productsList.map((product, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <img src={product.image} alt={product.name} />
                  </td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>
                    <MdAddCircleOutline
                      className="icons plus"
                      onClick={(e) => {
                        setUpdatedProduct({
                          ...product,
                          amount: product.amount + 1,
                        });
                      }}
                    />
                    {product.amount}
                    <AiOutlineMinusCircle
                      className="icons minus"
                      onClick={(e) => {
                        if (product.amount > 0)
                          setUpdatedProduct({
                            ...product,
                            amount: product.amount - 1,
                          });
                      }}
                    />
                    <RiDeleteBin5Line
                      className="icons trash"
                      onClick={() => deleteProduct(product.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
        <Col xs={6} md={4} className="summary-section">
          <div className="summary-wrapper">Summary</div>
        </Col>
      </Row>
    </Container>
  );
}
