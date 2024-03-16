import classes from "./NewProduct.module.css";
import { useEffect, useState } from "react";
import { postProduct } from "../utils/Actions";
export default function NewProduct() {
  const [product, setproduct] = useState({
    name: "",
    image: "",
    price: 0,
    amount: 0,
    dampingRate: 18,
  });

  return (
    <div className={classes.bodyVirtual}>
      <div className={classes.wrapper}>
        <h1 className={classes.title}>New Product</h1>
        <div className={classes.form__group}>
          <input
            type="text"
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
            type="text"
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
            type="input"
            className={classes.form__field}
            placeholder="Quantity"
            name="quantity"
            id="quantity"
            onChange={(e) =>
              setproduct({ ...product, quantity: parseInt(e.target.value) })
            }
            required
          />
          <label htmlFor="name" className={classes.form__label}>
            Quantity
          </label>
        </div>
        <button
          className={classes.btnAdd}
          role="button"
          onClick={() => postProduct(product)}
        >
          Save New Product
        </button>
      </div>
    </div>
  );
}
