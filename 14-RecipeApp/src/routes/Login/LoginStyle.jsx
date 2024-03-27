import styled from "styled-components";
import background from "/public/bgLogin.avif";
const Font =
  "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap";
const peach = "#e5ae8a";
const dgreen = "#2c3834";

const LoginStyle = styled.div`
  /* Global Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${Font};
  }

  ::selection {
    background: rgba(229, 174, 138, 0.5);
  }
  background-image: url(${background});
  background-size: cover;
  height: 100vh;
  background-size: cover;
  display: flex;
  justify-content: center;

  .container {
    max-width: 40vw;
    min-width: 30vw;
    padding: 0 20px;
    padding-top: 10rem;
  }

  .wrapper {
    width: 100%;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.1);
  }

  .wrapper .title {
    line-height: 90px;
    background: ${dgreen};
    border-radius: 10px 10px 0 0;
    color: ${peach};
    font-weight: 600;
    font-size: 30px;
    display: flex;
    text-align: center;
    justify-content: center;
  }

  .wrapper form {
    padding: 30px 25px 25px 25px;
  }

  .wrapper form .row {
    height: 45px;
    margin-bottom: 15px;
    position: relative;
  }

  .wrapper form .row input {
    height: 100%;
    width: 100%;
    padding-left: 60px;
    outline: none; /* Remove the default focus outline */
    border-radius: 5px;
    border: 1px solid lightgray;
    font-size: 16px;
    transition: all 0.3s ease; /* Apply a smooth transition for all properties over 0.3s */
  }

  form .row input:focus {
    border-color: ${peach};
    box-shadow: inset 0px 0px 5px 5px rgba(229, 174, 138, 0.7);
  }

  form .row input::placeholder {
    color: #999;
  }

  .wrapper form .row i {
    position: absolute;
    width: 47px;
    height: 100%;
    font-size: 18px;
    color: ${peach};
    background: ${dgreen};
    border: 1px solid ${peach};
    border-radius: 5px 0 0 5px; /* only left side of the icons given radius */
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .wrapper form .pass {
    margin: -8px 0 20px 0;
  }

  .wrapper form .pass a {
    color: ${peach};
    text-decoration: none;
    font-size: 17px;
  }

  .wrapper form .pass a:hover {
    text-decoration: underline;
  }

  .wrapper form .button button {
    color: ${peach};
    font-size: 20px;
    font-weight: 500;
    padding-left: 0; /* previous padding  from input canceled for this item to center it */
    background: ${dgreen};
    border: 1px solid ${peach};
    cursor: pointer;
  }

  form .button button:hover {
    background: lightgray;
    color: ${peach};
  }

  .wrapper form .signup-link {
    text-align: center;
    margin-top: 20px;
    font-size: 17px;
    
  }

  .wrapper form .signup-link a {
    color: ${peach};
    text-decoration: none;
    
  }

  form .signup-link a:hover {
    text-decoration: underline;
  }
`;

export default LoginStyle;
