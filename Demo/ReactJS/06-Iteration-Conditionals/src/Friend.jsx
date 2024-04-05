function Friend({ name, isOnline }) {
  let prefix;

  if (isOnline) {
    prefix = <div className="green-dot" />;
  }

  return (
    // <li className="friend">
    //   {prefix}
    //   {/* {isOnline && <div className="green-dot" />} */}
    //   {name}
    // </li>

    //
    <li className="friend">
      {if (isOnline) {
        <div className="green-dot" />
      }}

      {name}
    </li>
    );
}

export default Friend;
