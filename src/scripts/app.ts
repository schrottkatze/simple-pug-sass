import "../pages/index.pug";

let el = document.querySelector("#click-me");
let flag = false;

if (el) {
  el.addEventListener("click", toggle);
}

function toggle() {
  if (flag) document.body.style.backgroundColor = "#101010";
  else document.body.style.backgroundColor = "#ff0000";
  flag = !flag;
}
