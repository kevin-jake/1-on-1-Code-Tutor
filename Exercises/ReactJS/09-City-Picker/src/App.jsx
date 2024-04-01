import React from "react";

import { CITIES } from "./data";

/*
  "CITIES" is an array of objects with the following shape:
[
  ...
  { "name": "Sapang Dalaga", "province": "MSC" },
  { "name": "Sinacaban", "province": "MSC" },
  { "name": "Tangub", "province": "MSC", "city": true },
  ...
]
  */

function App() {
  const [province, setProvince] = React.useState("");

  return (
    <form>
      <fieldset>
        <legend>Shipping Info</legend>
        <label htmlFor="city">City:</label>
        <select id="city" name="city">
          {/* TODO: PUT YOUR ANSWER HERE! */}
        </select>
      </fieldset>

      <p className="city-display">
        Acronym of the province of the selected city: {province}
      </p>

      <button>Submit</button>
    </form>
  );
}

export default App;
