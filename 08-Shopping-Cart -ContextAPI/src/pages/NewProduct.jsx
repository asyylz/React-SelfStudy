import classes from "./NewProduct.module.css";
import styles from "./Home.module.css";
import { useContext, useEffect, useState, useRef } from "react";
import { CartContext } from "../store/shopping-cart-context";
export default function NewProduct() {
  const { postProduct } = useContext(CartContext);

  const productName = useRef();
  const productImage = useRef();
  const productPrice = useRef();
  const productAmount = useRef();

  const inputIsValid =
    !productName.current ||
    !productName.current.value ||
    productName.current.value.trim() === "" ||
    !productImage.current ||
    !productImage.current.value ||
    productImage.current.value.trim() === "" ||
    !productAmount.current ||
    !productAmount.current.value ||
    !productPrice.current ||
    !productPrice.current.value;

  function handlePost(event) {
    event.preventDefault();
    if (inputIsValid) {
      const alertMessage = "Please enter all details...";
      alert(alertMessage);
      return;
    }
    const newProduct = {
      name: productName.current.value,
      image: productImage.current.value,
      price: parseInt(productPrice.current.value),
      amount: parseInt(productAmount.current.value),
      dampingRate: 18,
    };

    postProduct(newProduct);
    event.target.reset();
  }

  // const handleFocus = () => {
  //   let inputName = nameRef.current;
  //   inputName.focus();
  // };

  return (
    <div className={classes.bodyVirtual}>
      <form className={classes.wrapper} onSubmit={handlePost}>
        <h1 className={classes.title}>New Product</h1>
        <div className={classes.form__group}>
          <input
            type="text"
            ref={productName}
            className={classes.form__field}
            placeholder="Name"
            id="name"
          />
          <label htmlFor="name" className={classes.form__label}>
            Product Name
          </label>
        </div>
        <div className={classes.form__group}>
          <input
            type="text"
            ref={productImage}
            className={classes.form__field}
            placeholder="Product Image"
            id="image"
          />
          <label htmlFor="name" className={classes.form__label}>
            Product Image
          </label>
        </div>
        <div className={classes.form__group}>
          <input
            type="number"
            ref={productPrice}
            className={classes.form__field}
            placeholder="Price"
            id="price"
          />
          <label htmlFor="name" className={classes.form__label}>
            Price
          </label>
        </div>
        <div className={classes.form__group}>
          <input
            type="number"
            ref={productAmount}
            className={classes.form__field}
            placeholder="amount"
            id="amount"
          />
          <label htmlFor="name" className={classes.form__label}>
            Quantity
          </label>
        </div>
        <button className={styles.btnAdd} role="button" type="submit">
          Save New Product
        </button>
      </form>
    </div>
  );
}
