function App() {
  return (
    <div>
      <button
        style={{
          border: "2px solid",
          color: "red",
          borderColor: "red",
          background: "white",
          borderRadius: 4,
          padding: 16,
          margin: 8,
        }}
      >
        Cancel
      </button>
      <button
        style={{
          border: "2px solid",
          color: "black",
          borderColor: "black",
          background: "white",
          borderRadius: 4,
          padding: 16,
          margin: 8,
        }}
      >
        Confirm
      </button>
    </div>
  );
}

export default App;
