import classes from "./NewProduct.module.css";
import styles from "./Home.module.css";
import { useEffect, useState } from "react";
import { CartContext } from "../store/shopping-cart-context";
export default function NewProduct() {
  const { postProduct } =
  useContext(CartContext);
  const [product, setproduct] = useState({
    name: "",
    image: "",
    price: 0,
    amount: 0,
    dampingRate: 18,
  });

  const inputIsValid =
    !product.name ||
    product.name.trim() === "" ||
    product.image.trim() === "" ||
    !product.image ||
    !product.amount ||
    !product.price;

  const resetNewProductInput = () => {
    setproduct({
      name: "",
      image: "",
      price: 0,
      amount: 0,
      dampingRate: 18,
    });
  };
  function handlePost() {
    if (inputIsValid) {
      const alertMessage = "Please enter all details...";
      alert(alertMessage);
      return;
    }
    postProduct(product);
    resetNewProductInput(product);
  }

  return (
    <div className={classes.bodyVirtual}>
      <div className={classes.wrapper}>
        <h1 className={classes.title}>New Product</h1>
        <div className={classes.form__group}>
          <input
            type="text"
            value={product.name}
            className={classes.form__field}
            placeholder="Name"
            name="name"
            id="name"
            onChange={(e) => setproduct({ ...product, name: e.target.value })}
            required
          />
          <label htmlFor="name" className={classes.form__label}>
            Product Name
          </label>
        </div>
        <div className={classes.form__group}>
          <input
            type="text"
            value={product.image}
            className={classes.form__field}
            placeholder="Product Image"
            name="image"
            id="image"
            onChange={(e) => setproduct({ ...product, image: e.target.value })}
            required
          />
          <label htmlFor="name" className={classes.form__label}>
            Product Image
          </label>
        </div>
        <div className={classes.form__group}>
          <input
            type="number"
            value={product.price === 0 ? "" : product.price}
            className={classes.form__field}
            placeholder="Price"
            name="price"
            id="price"
            onChange={(e) =>
              setproduct({ ...product, price: parseInt(e.target.value) })
            }
            required
          />
          <label htmlFor="name" className={classes.form__label}>
            Price
          </label>
        </div>
        <div className={classes.form__group}>
          <input
            type="number"
            value={product.amount === 0 ? "" : product.amount}
            className={classes.form__field}
            placeholder="amount"
            name="amount"
            id="amount"
            onChange={(e) =>
              setproduct({ ...product, amount: parseInt(e.target.value) })
            }
            required
          />
          <label htmlFor="name" className={classes.form__label}>
            Quantity
          </label>
        </div>
        <button className={styles.btnAdd} role="button" onClick={handlePost}>
          Save New Product
        </button>
      </div>
    </div>
  );
}
