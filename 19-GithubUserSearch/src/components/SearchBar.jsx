import { useState } from "react/cjs/react.production.min";
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
      <input
        type="text"
        value={enteredSearch}
        onChange={(event) => setEnteredSearch(event.target.value)}
      />
      <button type="button">Search</button>
    </form>
  );
}
