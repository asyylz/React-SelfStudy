import classes from "./Home.module.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className={classes.container}>
      <button className={classes.btns} onClick={() => navigate("/newproduct")}>
        New Product
      </button>
      <button className={classes.btns} onClick={() => navigate("/productList")}>Product List</button>
    </div>
  );
}
