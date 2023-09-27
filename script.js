function createLoader() {
  let loaderDiv = document.createElement("div");
  let loaderDivParent = document.createElement("div");
  loaderDiv.classList.add("spinner");
  loaderDivParent.classList.add("spinnerParent");
  document.body.prepend(loaderDivParent);
  loaderDivParent.appendChild(loaderDiv);
}
setTimeout(RemoverLoader, 2000);

function RemoverLoader() {
  let loader = document.querySelector(".spinnerParent");
  document.body.removeChild(loader);
}
addEventListener(onload, createLoader());
