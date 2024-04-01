import React from "react";

const VALID_LANGUAGES = [
  "mandarin",
  "spanish",
  "english",
  "hindi",
  "arabic",
  "portugese",
];

const initialToppings = {
  anchovies: false,
  chicken: false,
  tomatoes: false,
};

const OPTIONS = [
  {
    label: "18 and under",
    value: "0-18",
  },
  {
    label: "19 to 39",
    value: "19-39",
  },
  {
    label: "40 to 64",
    value: "40-64",
  },
  {
    label: "65 and over",
    value: "65-infinity",
  },
];

function CompleteForm() {
  const [name, setName] = React.useState("");
  const [secret, setSecret] = React.useState("");
  const [comment, setComment] = React.useState("");
  const [language, setLanguage] = React.useState();
  const [optIn, setOptIn] = React.useState(false);
  const [pizzaToppings, setPizzaToppings] = React.useState(initialToppings);
  const [age, setAge] = React.useState(OPTIONS[0].value);

  // Get a list of all toppings.
  // ['anchovies', 'chicken', 'tomato'];
  const toppingsList = Object.keys(initialToppings);

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log(name);
        }}
      >
        <div className="form-inputs">
          <label htmlFor="name-field">Name: </label>
          <input
            id="name-field"
            className="text"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <div>
            <strong>Current value:</strong>
            {` ${name}` || "(empty)"}
          </div>
        </div>

        <div className="form-inputs">
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            className="text"
            value={secret}
            onChange={(event) => {
              setSecret(event.target.value);
            }}
          />
          <div>
            <strong>Current value:</strong>
            {` ${secret}` || "(empty)"}
          </div>
        </div>

        <div className="form-inputs">
          <label htmlFor="comment-field">Share your experiences:</label>
          <textarea
            id="comment-field"
            value={comment}
            className="text"
            onChange={(event) => {
              setComment(event.target.value);
            }}
          />
          <div>
            <strong>Current value:</strong>
            {` ${comment}` || "(empty)"}
          </div>
        </div>
        <div className="form-inputs">
          <fieldset>
            <legend>Select language:</legend>

            {VALID_LANGUAGES.map((option) => (
              <div key={option}>
                <input
                  type="radio"
                  name="current-language"
                  id={option}
                  value={option}
                  checked={option === language}
                  onChange={(event) => {
                    setLanguage(event.target.value);
                  }}
                />
                <label htmlFor={option}>
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </label>
              </div>
            ))}
          </fieldset>
          <div>
            <strong>Current value:</strong>
            {` ${language}` || "(empty)"}
          </div>
        </div>

        <div className="form-inputs">
          <input
            type="checkbox"
            id="opt-in-checkbox"
            checked={optIn}
            onChange={(event) => {
              setOptIn(event.target.checked);
            }}
          />
          <label htmlFor="opt-in-checkbox">
            <strong>Yes,</strong> I would like to join the newsletter.
          </label>
          <div>
            <strong>Current value:</strong>
            {` ${optIn.toString()}` || "(empty)"}
          </div>
        </div>

        <div className="form-inputs">
          <fieldset>
            <legend>Select toppings:</legend>

            {/*
            Iterate over those toppings, and
            create a checkbox for each one:
          */}
            {toppingsList.map((option) => (
              <div key={option}>
                <input
                  type="checkbox"
                  id={option}
                  value={option}
                  checked={pizzaToppings[option] === true}
                  onChange={(event) => {
                    setPizzaToppings({
                      ...pizzaToppings,
                      [option]: event.target.checked,
                    });
                  }}
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
          </fieldset>
          <div>
            <strong>Current value:</strong>
            {` ${JSON.stringify(pizzaToppings)}` || "(empty)"}
          </div>
        </div>

        <div className="form-inputs">
          <label htmlFor="age-select">How old are you?</label>

          <select
            id="age-select"
            value={age}
            onChange={(event) => {
              setAge(event.target.value);
            }}
          >
            {OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div>
            <strong>Current value:</strong>
            {` ${age}` || "(empty)"}
          </div>
        </div>
      </form>
    </>
  );
}

export default CompleteForm;
