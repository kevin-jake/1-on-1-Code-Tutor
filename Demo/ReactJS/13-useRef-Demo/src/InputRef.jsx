import React, { useRef } from "react";

function InputRef() {
  const inputRef = useRef(null);
  console.log("🚀 ~ InputRef ~ inputRef:", inputRef);

  const handleSubmit = () => {
    const value = inputRef.current.value;
    // Submit the form
    displaySuccessMessage();
  };

  const displaySuccessMessage = () => {
    // Display success message without clearing the input field
  };

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

// using useState
function Form() {
  const [inputValue, setInputValue] = useState("");
  console.log("🚀 ~ Form ~ inputValue:", inputValue);

  const handleSubmit = () => {
    // Submit the form
    displaySuccessMessage();
  };

  const displaySuccessMessage = () => {
    // Display success message
    setInputValue(""); // Clear the input field
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input value={inputValue} onChange={handleInputChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default InputRef;
