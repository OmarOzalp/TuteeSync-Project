document.addEventListener("DOMContentLoaded", function () {
  const btnNav = document.querySelector(".btn-mobile-nav");
  const popUp = document.querySelector(".pop-up");

  btnNav.addEventListener("click", function () {
    popUp.classList.toggle("pop-up-open");
    btnNav.classList.toggle("btn-pop-up-open");
  });

  // Join us script

  const rFileBtn = document.getElementById("real-btn");
  const fFileBtn = document.getElementById("custom-btn");
  const chosenFile = document.querySelector(".chosen-file");

  if (fFileBtn != null) {
    fFileBtn.addEventListener("click", function () {
      rFileBtn.click();
    });
  }
  if (rFileBtn != null) {
    rFileBtn.addEventListener("change", function () {
      if (rFileBtn.value) {
        chosenFile.innerHTML = rFileBtn.value.match(
          /[\/\\]([\w\d\s\.\-\(\)]+)$/
        )[1];
      } else {
        chosenFile.innerHTML = "No file chosen";
      }
    });
  }

  const btns = document.querySelectorAll(".btn-category");
  const classes = [
    "btn-a",
    "btn-c",
    "btn-e",
    "btn-f",
    "btn-h",
    "btn-m",
    "btn-s",
  ];
  const listings = document.querySelectorAll(".listing");
  const listingClasses = ["art", "com", "eng", "flang", "hum", "mth", "sci"];

  if (btns.length > 0) {
    btns[0].addEventListener("click", function () {
      for (var i = 0; i < listings.length; i++) {
        listings[i].classList.remove("hide");
      }
    });

    for (var i = 1; i < btns.length; i++) {
      for (var j = 0; j < classes.length; j++) {
        if (btns[i].classList.contains(classes[j])) {
          const btn = btns[i];

          const listingClass = listingClasses[j];
          console.log(btns[i]);
          btn.addEventListener("click", function () {
            for (var k = 0; k < listings.length; k++) {
              if (listings[k].classList.contains(listingClass)) {
                listings[k].classList.remove("hide");
              } else {
                listings[k].classList.add("hide");
              }
            }
          });
        }
      }
    }
  }

  const flashed = document.querySelector(".flashed");
  const flashBtn = document.querySelector(".flash-btn");

  if (flashBtn != null) {
    flashBtn.addEventListener("click", function () {
      flashed.remove();
    });
  }

  const artBtns = document.querySelectorAll("select-category");
});
