import React from "react";

const LogoutBtn = () => {
  const [user, setUser] = React.useState({ name: "Alyssa" });
  // eslint-disable-next-line no-unused-vars
  const [status, setStatus] = React.useState("ready");
  const [confirmationMessage, setConfirmationMessage] = React.useState();

  if (!user) {
    return <p>{confirmationMessage}</p>;
  }

  return (
    <button
      onClick={() => {
        setUser(null);
        setStatus("initial");
        setConfirmationMessage("You have been logged out.");
      }}
    >
      Log Out
    </button>
  );
};

export default LogoutBtn;
