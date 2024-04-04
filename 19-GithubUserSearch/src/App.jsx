import "./App.css";
import SearchBar from "./components/SearchBar";
import UserInfo from "./components/UserInfo";
import UserContextProvider from "./components/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <header>
        <h1>Github User Search</h1>
      </header>
      <SearchBar />
      <UserInfo />
    </UserContextProvider>
  );
}

export default App;
