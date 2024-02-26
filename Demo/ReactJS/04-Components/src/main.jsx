import React from "react";
import { createRoot } from "react-dom/client";

function FriendlyGreeting({ name }) {
  return (
    <p
      style={{
        fontSize: "1.25rem",
        textAlign: "center",
        color: "sienna",
      }}
    >
      Greetings, {name}!
    </p>
  );
}

const root = createRoot(document.querySelector("#root"));

root.render(
  <div>
    <FriendlyGreeting name="Erika" />
    <FriendlyGreeting name="Carlo" />
    <FriendlyGreeting name="Jommel" />
  </div>
);
