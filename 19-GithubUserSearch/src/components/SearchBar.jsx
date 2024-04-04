import { useState, useContext } from "react";
import { isValid } from "./validate";
import { UserContext } from "./UserContextProvider";

export default function SearchBar() {

  const { fetchUser } = useContext(UserContext);

  const [enteredSearch, setEnteredSearch] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(isValid(enteredSearch));
    if (!isValid(enteredSearch)) {
      return;
    }
    fetchUser(enteredSearch);
  }

  return (
    <form>
      <div className="control no-margin">
        {/* <label htmlFor="usersearch">
          Enter you user name you would like to search
        </label> */}
        <input
          id="usersearch"
          type="text"
          value={enteredSearch}
          onChange={(event) => setEnteredSearch(event.target.value)}
        />
      </div>
      <p className="form-actions">
        <button type="submit" onClick={handleSubmit}>
          Search
        </button>
      </p>
    </form>
  );
}
