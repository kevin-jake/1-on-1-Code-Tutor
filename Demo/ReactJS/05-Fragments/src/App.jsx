import React from "react";

function App() {
  // return (
  //   <div>
  //     <h1>Welcome to my homepage!</h1>
  //     <p>Don't forget to sign the guestbook!</p>
  //   </div>
  // );
  return (
    <ul>
      <ListItems />
      <li>Item 3</li>
      <li>Item 4</li>
    </ul>
  );
}

function ListItems() {
  return (
    <>
      <li>Item 1</li>
      <li>Item 2</li>
    </>
  );
}

export default App;
