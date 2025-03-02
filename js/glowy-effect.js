// Event listener for the glow effect on the cards
// When the mouse hovers over the card, the card will glow

const injectCursorPosition = ({ x, y }) => {
  document.documentElement.style.setProperty("--x", Math.round(x));
  document.documentElement.style.setProperty("--y", Math.round(y));
};

document.body.addEventListener("pointermove", injectCursorPosition);
