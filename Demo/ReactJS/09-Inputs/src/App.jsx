import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("cats!");
  // const [searchTerm, setSearchTerm] = React.useState();
  // const [searchTerm, setSearchTerm] = React.useState('');

  return (
    <>
      <form>
        <label htmlFor="search-input">Search:</label>
        <input
          type="text"
          id="search-input"
          value={searchTerm}
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </form>

      <p>Search term: {searchTerm}</p>

      <button onClick={() => setSearchTerm(Math.random())}>Click me</button>
    </>
  );
}

export default App;
