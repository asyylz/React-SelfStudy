import classes from "./Home.module.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className={classes.container}>
      <div>
        <button
          className={classes.btnAdd}
          onClick={() => navigate("/newproduct")}
        >
          New Product
        </button>
      </div>
      <div>
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
