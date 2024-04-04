import { useState } from "react";
import { isValid } from "./validate";
export default function SearchBar() {
  const [enteredSearch, setEnteredSearch] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (isValid(enteredSearch)) {
      return;
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="control no-margin">
        <label htmlFor="usersearch">
          Enter you user name you would like to search
        </label>
        <input
          id="usersearch"
          type="text"
          value={enteredSearch}
          onChange={(event) => setEnteredSearch(event.target.value)}
        />
      </div>
      <p className="form-actions">
        <button>Search</button>
      </p>
    </form>
  );
}
