import "bootstrap/dist/css/bootstrap.min.css";
import "./ProductList.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import classes from "./Home.module.css";
import {
  updateProduct,
  getAllProducts,
  deleteProduct,
  formatter,
  getProductById,
} from "../utils/Actions";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { MdAddCircleOutline } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";

export default function ProductList() {
  const [updatedProduct, setUpdatedProduct] = useState(null);
  const [productsList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [delivery, setDelivery] = useState(0);

  useEffect(() => {
    handleGetData();
  }, []);

  function handleGetData() {
    getAllProducts()
      .then((res) => {
        setProductList(res);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
        console.error("Error fetching or updating products:", err);
      });
  }
  function handleUpdate(product, e) {
    let updatedProductData;
    const classNames = e.target.className.baseVal.split(" ");
    if (product.amount > 0 && classNames.includes("minus")) {
      updatedProductData = {
        ...product,
        amount: product.amount - 1,
      };
    } else if (classNames.includes("plus")) {
      updatedProductData = {
        ...product,
        amount: product.amount + 1,
      };
    }
    if (updatedProductData) {
      setUpdatedProduct(updatedProductData);
      updateProduct(updatedProductData.id, updatedProductData).then(
        handleGetData
      );
    }
  }

  function handleDelete(productID) {
    deleteProduct(productID).then(() => handleGetData());
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }

  const total = productsList.reduce(
    (total, product) => total + product.price * product.amount,
    0
  );
  const totalItem = productsList.reduce(
    (total, product) => total + product.amount,
    0
  );

  return (
    <Container className="container">
      <h3>Shopping Cart</h3>
      <Row>
        <Col md={12} lg={8} className="product-section">
          <Table>
            <tbody id="tbody">
              {productsList.map((product, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <img src={product.image} alt={product.name} />
                  </td>
                  <td className="name">
                    <span>{product.name}</span>
                    <span>{formatter.format(product.price)}</span>
                  </td>
                  <td className="amount">
                    <AiOutlineMinusCircle
                      className="icons minus"
                      onClick={(e) => handleUpdate(product, e)}
                    />
                    {product.amount}
                    <MdAddCircleOutline
                      className="icons plus"
                      onClick={(e) => handleUpdate(product, e)}
                    />
                    <RiDeleteBin5Line
                      className="icons trash"
                      onClick={() => handleDelete(product.id)}
                    />
                  </td>
                  <td>
                    <div className="unit-total">
                      <small>Total</small>
                      <small>
                        {formatter.format(product.amount * product.price)}
                      </small>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
        <Col md={12} lg={4} className="summary-section">
          <div className="summary-wrapper">
            <h3>Summary</h3>
          </div>
          <hr />
          <div className="total">
            <span>ITEMS: {totalItem}</span>
            <span>TOTAL: {formatter.format(total)}</span>
          </div>
          <hr />
          <div className="shipping">
            <span>SHIPPING</span>
            <Form.Select
              aria-label="Default select example"
              className="mt-4 mb-4"
              onChange={(e) => setDelivery(e.target.value)}
            >
              <option value="0">Choose delivery option</option>
              <option value="0">Standard Delivery - Free (4-5 days)</option>
              <option value="10">Express Delivery - £10.00 (1-2 days)</option>
            </Form.Select>
          </div>
          <hr />
          <div className="promotion">
            <span>GIVE CODE</span>
            <input type="text" placeholder="Enter your code" />
          </div>
          <hr />
          <div className="total price">
            <div>
              <span>SUB TOTAL: </span>
              <span>{formatter.format(total * 0.82)}</span>
            </div>
            <div>
              <span>TAX(%18): </span>
              <span>{formatter.format(total * 0.18)}</span>
            </div>
            <div>
              <span>TOTAL PRICE:</span>
              <span>{formatter.format(total + parseInt(delivery))}</span>
            </div>
          </div>
          <div className="btn-div">
            <button className={classes.btnAdd}>CHECKOUT</button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
