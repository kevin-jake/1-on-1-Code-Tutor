import CompleteForm from "./CompleteForm";
import SearchForm from "./SearchForm";

function App() {
  function runSearch(searchTerm) {
    window.alert(`Searched for: ${searchTerm}`);
  }

  // return <SearchForm runSearch={runSearch} />;
  return <CompleteForm />;
}

export default App;
