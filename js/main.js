const collapsiable = document.querySelectorAll(".collapsiable");
console.log(collapsiable);
collapsiable.forEach((item) => {
  item.addEventListener("click", function () {
    this.classList.toggle("collapsiable--expanded");
  });
});
