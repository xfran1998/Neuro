const mode_btn = document.querySelector("#mode-btn");

console.log(mode_btn);

mode_btn.addEventListener("click", () => {
  console.log("click");
  mode_btn.classList.toggle("rigth");
});