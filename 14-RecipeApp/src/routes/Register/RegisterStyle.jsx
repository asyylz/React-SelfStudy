import styled from "styled-components";
import background from "/public/bgRegister.avif";
const Font =
  "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap";
const dgreen = "#2c3834";
const white = "#f7f1e1";

const RegisterStyle = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${Font};
  }

  ::selection {
    background: rgba(229, 174, 138, 0.5);
  }
  height: 100vh;
  width: 100vw;
  background-image: url(${background});
  background-size: cover;

  .container {
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
    color: ${white};
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
    outline: none;
    border-radius: 5px;
    border: 1px solid lightgray;
    font-size: 16px;
    transition: all 0.3s ease;
  }

  form .row input::placeholder {
    color: #999;
  }

  .wrapper form .row i {
    position: absolute;
    width: 47px;
    height: 100%;
    font-size: 18px;
    color: ${white};
    background: ${dgreen};
    border: 1px solid ${dgreen};
    border-radius: 5px 0 0 5px; /* only left side of the icons given radius */
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .wrapper form .pass {
    margin: -8px 0 20px 0;
  }

  .wrapper form .button input {
    color: rgba(177, 235, 228, 0.7);
    font-size: 20px;
    font-weight: 500;
    padding-left: 0;
    background: ${dgreen};
    cursor: pointer;
    border: none;
    color: ${white};
  }

  form .button input:hover {
    background: ${white};
    color: ${dgreen};
    border: 1px solid ${dgreen};
  }
  .error {
    position: absolute;
    top: -30px;
    color: red;
    font-size: 18px;
    font-weight: 500;
  }
  @media (min-width: 701px) {
    .container {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .wrapper {
      max-width: 700px;
    }
  }
  @media (max-width: 700px) {
    display: flex;
    justify-content: center;
    margin: auto;
    height: 100vh;
    padding: auto;

    .wrapper {
      width: 60vw;
      margin-left: 1.5rem;
    }
  }
`;

export default RegisterStyle;
