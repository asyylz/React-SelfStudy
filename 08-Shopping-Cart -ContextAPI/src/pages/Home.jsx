import classes from "./Home.module.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className={classes.container}>
      <div className={classes.div1}>
        <button
          className={classes.btnAdd}
          onClick={() => navigate("/newproduct")}
        >
          New Product
        </button>
      </div>
      <div className={classes.div2}>
        <button
          className={classes.btnAdd}
          onClick={() => navigate("/productList")}
        >
          Product List
        </button>
      </div>
    </div>
  );
}
