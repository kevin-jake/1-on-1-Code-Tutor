import React from "react";

function Character() {
  const [strength, setStrength] = React.useState(6);
  const [dexterity, setDexterity] = React.useState(9);
  const [intelligence, setIntelligence] = React.useState(15);

  function triggerLevelUp() {
    const str = strength + 1;
    const dex = dexterity + 2;
    const int = intelligence + 3;
    setStrength(str);
    setDexterity(dex);
    setIntelligence(int);
    window.alert(`
      Congratulations! Your hero now has the following stats:
      Str: ${str}
      Dex: ${dex}
      Int: ${int}
    `);
  }

  return (
    <div className="wrapper">
      <img
        alt="8-bit wizard character"
        src="https://sandpack-bundler.vercel.app/img/mage-sprite.gif"
      />
      <button onClick={triggerLevelUp}>Level Up</button>
    </div>
  );
}

export default Character;
