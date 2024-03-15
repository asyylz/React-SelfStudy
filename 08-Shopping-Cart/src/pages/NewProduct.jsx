import classes from "./NewProduct.module.css";
export default function NewProduct() {
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
            required
          />
          <label htmlFor="name" className={classes.form__label}>
            Product Image
          </label>
        </div>
        <div className={classes.form__group}>
          <input
            type="number"
            className={classes.form__field}
            placeholder="Price"
            name="price"
            id="price"
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
            required
          />
          <label htmlFor="name" className={classes.form__label}>
            Quantity
          </label>
        </div>
        <button className={classes.btnAdd} role="button">
          Save New Product
        </button>
      </div>
    </div>
  );
}
