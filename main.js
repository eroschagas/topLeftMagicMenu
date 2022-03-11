var itemContainer = document.querySelectorAll(".menu-item-container");
var itemIcons = document.querySelectorAll(".menu-item-icons");
var menuItem = document.querySelectorAll(".menu-item");
var menuTitle = document.querySelectorAll(".menu-top>div");
var getColor = document.querySelector(":root");
var changeColor1 = ["#B6AD90", "#BCB99D", "#c2c5aa", "#B3B998", "#A4AC86"];
var changeColor2 = ["#936639", "#88683E", "#7C6A42", "#716C46", "#656D4A"];
var changeColorName = ["#656D4A", "#716C46", "#7C6A42", "#88683E", "#936639"];
var changeColorTitle = ["#000000", "#101010", "#202020", "#101010", "#000000"];
var changeColorPar = ["#000000", "#101010", "#202020", "#101010", "#000000"];
var divHome = document.querySelectorAll(".div-home");

var removeClass = function () {
  for (let index = 0; index < itemContainer.length; index++) {
    if (itemContainer[index].classList.contains("menu-scale-out") == true) {
      itemContainer[index].classList.remove("menu-scale-out");
      itemContainer[index].classList.add("menu-scale-in");
      itemIcons[index].classList.remove("menu-color-change");
      menuTitle[index].classList.remove("menu-fade-in");
      divHome[index].classList.add("menu-fade-out-full");
      divHome[index].classList.remove("menu-fade-in-full");
      setTimeout(() => {
        divHome[index].style.display = "none";
        divHome[index].classList.remove("menu-fade-out-full");
      }, 300);
    } else {
      itemContainer[index].classList.remove("menu-scale-in");
    }
  }
};

var addClass = function (index) {
  itemContainer[index].classList.add("menu-scale-out");
  itemIcons[index].classList.add("menu-color-change");
  menuTitle[index].classList.add("menu-fade-in");
  getColor.style.setProperty("--color1", changeColor1[index]);
  getColor.style.setProperty("--color2", changeColor2[index]);
  getColor.style.setProperty("--name", changeColorName[index]);
  getColor.style.setProperty("--title", changeColorTitle[index]);
  getColor.style.setProperty("--p", changeColorPar[index]);
  setTimeout(() => {
    divHome[index].style.display = "block";
    divHome[index].classList.add("menu-fade-in-full");
  }, 300);
};

for (let index = 0; index < menuItem.length; index++) {
  menuItem[index].addEventListener("click", function (e) {
    if (itemContainer[index].classList.contains("menu-scale-out") == true) {
      return;
    } else {
      removeClass();
      addClass(index);
    }
  });
}
