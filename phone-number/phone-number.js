export const clean = (number) => {
  number = number.replace(/[() -.+]/g, "");
  if (number.includes("@") || number.includes(":") || number.includes("!")) {
    throw new Error("Punctuations not permitted");
  } else if (number.length < 10) {
    throw new Error("Incorrect number of digits");
  } else if (!Number(number)) {
    throw new Error("Letters not permitted");
  } else if (number.charAt(0) !== "1" && number.length === 11) {
    throw new Error("11 digits must start with 1");
  } else if (
    number.charAt(0) === "0" ||
    (number.length === 11 && number.charAt(1) === "0")
  ) {
    throw new Error("Area code cannot start with zero");
  } else if (
    (number.charAt(0) === "1" && number.length === 10) ||
    (number.length === 11 && number.charAt(1) === "1")
  ) {
    throw new Error("Area code cannot start with one");
  } else if (
    number.charAt(3) === "0" ||
    (number.length === 11 && number.charAt(4) === "0")
  ) {
    throw new Error("Exchange code cannot start with zero");
  } else if (
    number.charAt(3) === "1" ||
    (number.length === 11 && number.charAt(4) === "1")
  ) {
    throw new Error("Exchange code cannot start with one");
  } else if (number.charAt(0) === "1" && number.length === 11) {
    return number.slice(1);
  } else if (number.length > 11) {
    throw new Error("More than 11 digits");
  }
  return number;
};
