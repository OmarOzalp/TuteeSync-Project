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

  const disBtn = document.querySelector(".disclaimer-btn");
  const disc = document.querySelector(".disclaimer");
  if (disBtn != null) {
    disBtn.addEventListener("click", function () {
      disc.remove();
    });
  }

  const password = document.getElementById("password");
  const strength = document.querySelector(".pas-strength");
  const strengthBar = document.querySelector(".strength-bar");

  if (password != null) {
    password.addEventListener("keyup", function () {
      strengthBar.classList.remove("strength-bar-strong");
      strengthBar.classList.remove("strength-bar-medium");
      strengthBar.classList.remove("strength-bar-weak");
      const pass = password.value;
      const upperCaseLetters = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
      ];
      // Array of lowercase letters a-z
      const letters = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
      ];
      // Array of symbols
      const symbols = [
        "!",
        '"',
        "#",
        "$",
        "%",
        "&",
        "'",
        "(",
        ")",
        "*",
        "+",
        ",",
        "-",
        ".",
        "/",
        ":",
        ";",
        "<",
        "=",
        ">",
        "?",
        "@",
        "[",
        "]",
        "^",
        "_",
        "`",
        "{",
        "|",
        "}",
        "~",
      ];

      let symbol = 0;
      let capLetter = 0;
      let lowLetter = 0;
      let number = 0;
      console.log(pass);
      for (var i = 0; i < pass.length; i++) {
        for (var k = 0; k < upperCaseLetters.length; k++) {
          if (pass[i] == upperCaseLetters[k]) {
            console.log("cap");
            capLetter = 1;
          }
        }
        for (var k = 0; k < letters.length; k++) {
          if (pass[i] == letters[k]) {
            console.log("low");
            lowLetter = 1;
          }
        }
        for (var k = 0; k < 10; k++) {
          if (pass[i] == k) {
            console.log(k);
            number = 1;
          }
        }
        for (var k = 0; k < symbols.length; k++) {
          if (pass[i] == symbols[k]) {
            console.log("symbol");
            symbol = 1;
          }
        }
      }
      const sum = symbol + capLetter + lowLetter + number;
      const str = document.getElementById("str");
      console.log(sum);
      if (pass.length < 8 || sum < 2) {
        strengthBar.classList.toggle("strength-bar-weak");
        str.textContent = "Weak";
        str.style.color = "#ff0000";
      }
      if (pass.length >= 8 && sum >= 3) {
        strengthBar.classList.toggle("strength-bar-strong");
        str.textContent = "Strong";
        str.style.color = "#008000";
      } else if (pass.length >= 8 && sum >= 2) {
        strengthBar.classList.toggle("strength-bar-medium");
        str.textContent = "Medium";
        str.style.color = "#ffbd31";
      }
    });
  }

  const userPopUp = document.querySelector(".user-name");
  const open = document.querySelector(".user-info");
  if (userPopUp != null) {
    userPopUp.addEventListener("click", function () {
      open.classList.toggle("hide");
    });
  }
});
