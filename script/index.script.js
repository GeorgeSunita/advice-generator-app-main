window.onload = function () {
  const adviceDiv = document.getElementById("advice");
  const formEl = document.getElementById("submit");
  const adviceHeadingEl = document.getElementById("heading");
  const displayAdvice = function (advice) {
    adviceHeadingEl.textContent = advice.slip.id;
    adviceDiv.innerHTML = '"' + advice.slip.advice + '"';
    adviceDiv.className = "adDiv";
  };

  formEl.addEventListener("submit", function (e) {
    e.preventDefault();

    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then(function (data) {
        console.log(data.slip);
        displayAdvice(data);
      });
  });
};

/*********- Grayish Blue: hsl(217, 19%, 38%)
- Dark Grayish Blue: hsl(217, 19%, 24%)
- Dark Blue: hsl(218, 23%, 16%)

Light Cyan: hsl(193, 38%, 86%)
- Neon Green: hsl(150, 100%, 66%)*/
