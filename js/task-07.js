// const fontSizeControl = document.querySelector("#font-size-control");
// const text = document.querySelector("#text");

// fontSizeControl.addEventListener("input", () => {
//   text.style.fontSize = `${fontSizeControl.value}px`;
// });



const fontSizeControl = {
  input: document.getElementById("font-size-control"),
  text: document.getElementById("text"),
}

fontSizeControl.text.style.fontSize = fontSizeControl.input.value + "px"

fontSizeControl.input.addEventListener("input", (event) => {
  const fontSize = event.currentTarget.value
  fontSizeControl.text.style.fontSize = `${fontSize}px`
})