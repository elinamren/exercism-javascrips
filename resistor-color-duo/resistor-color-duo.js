//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const colorsArray = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];

export const decodedValue = (colors) =>
  parseInt(
    `${colorsArray.indexOf(colors[0])}${colorsArray.indexOf(colors[1])}`
  );
