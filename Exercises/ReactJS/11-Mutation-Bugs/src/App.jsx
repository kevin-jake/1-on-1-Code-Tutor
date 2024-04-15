import { useState } from "react";

function App() {
  // FIX THE BUG IN THIS CODE
  const [colors, setColors] = useState(["#FFD500", "#FF0040"]);

  const colorStops = colors.join(", ");
  const backgroundImage = `linear-gradient(${colorStops})`;

  return (
    <>
      <h2> Gradient Selector</h2>
      <div
        className="gradient-preview"
        style={{
          backgroundImage,
        }}
      />

      <form>
        {colors.map((color, index) => {
          const colorId = `color-${index}`;

          return (
            <div key={colorId} className="color-row">
              <label htmlFor={colorId}>Color {index + 1}:</label>
              <input
                id={colorId}
                type="color"
                value={color}
                onChange={(event) => {
                  colors[index] = event.target.value;

                  setColors(colors);
                }}
              />
            </div>
          );
        })}
      </form>
    </>
  );
}

export default App;
