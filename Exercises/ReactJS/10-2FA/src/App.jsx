const CORRECT_CODE = "123456";

// CHANGE THE CODE BELOW TO MEET THE ACCEPTANCE CRITERIA
function App() {
  return (
    <>
      <label htmlFor="auth-code">Enter authorization code:</label>
      <div className="row">
        <input id="auth-code" type="text" required={true} maxLength={6} />
        <button>Validate</button>
      </div>
    </>
  );
}

export default App;
