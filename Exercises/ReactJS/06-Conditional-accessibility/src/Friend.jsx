import VisuallyHidden from "./VisuallyHidden";

// ADD CONDITIONAL ACCESSIBILITY ON THIS COMPONENT

function Friend({ name, isOnline }) {
  return (
    <li className="friend">
      {isOnline && <div className="green-dot" />}
      {name}
      {isOnline && <VisuallyHidden> (Online)</VisuallyHidden>}
    </li>
  );
}

export default Friend;
