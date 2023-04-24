const input = document.querySelector("#validation-input");

const toggleValidityClass = (isValid) => {
  input.classList.add(isValid ? "valid" : "invalid");
  input.classList.remove(isValid ? "invalid" : "valid");
};

input.addEventListener("blur", () => {
  const length = input.getAttribute("data-length");
  const valueLength = input.value.length;

  toggleValidityClass(valueLength === parseInt(length));
});