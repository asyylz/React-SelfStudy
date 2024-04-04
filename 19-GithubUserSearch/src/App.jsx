import "./App.css";
import MainSearchPage from "./components/MainSearchPage";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
    <header>
      <h1>Github User Search</h1>
    </header>
      <SearchBar />
      <MainSearchPage />
    </>
  );
}

export default App;
