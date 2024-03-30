import SearchForm from "./SearchForm";

function App() {
  function runSearch(searchTerm) {
    window.alert(`Searched for: ${searchTerm}`);
  }

  return <SearchForm runSearch={runSearch} />;
}

export default App;
