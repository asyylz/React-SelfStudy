import { useState } from "react";
import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";
import { useInput } from "../hooks/useInput";

export default function StateLogin() {
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
  } = useInput("");

  const emailIsInvalid =
    didEdit.email &&
    isEmail(enteredValues.email) &&
    isNotEmpty(enteredValues.email);

  const passwordIsInvalid =
    didEdit.password && hasMinLength(enteredValues.password, 6);

  function handleSubmit(event) {
    // always a good idea to also add validation here in this handleSubmit function.
    event.preventDefault();
    console.log(enteredValues);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          value={emailValue}
          name="email"
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          error={emailIsInvalid && "Please enter a valid email"}
        />
        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={() => handleInputBlur("password")}
          onChange={(event) =>
            handleInputChange("password", event.target.value)
          }
          error={passwordIsInvalid && "Please enter a valid password"}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
