
//GENERATING RANDOM HEXCOLOR CODE
const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

// console.log(randomColor());

//FUNCTION FOR COLOR CHANGING AND UPDATING THE RESPECTIVE HEXCODE
let intervalId;

const startChangingColor = () => {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }
  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
    document.querySelector("#colorCode").innerHTML = randomColor();
  }
};

//SELECTING THE COLOR CODE ON GLOBAL SCOPE
let copyTxt = document.querySelector("#colorCode").textContent;

const stopChangingColor = () => {
  clearInterval(intervalId);
  intervalId = null;
  copyTxt = document.querySelector("#colorCode").textContent;
};

//COPY THE COLOR CODE TO CLIPBOARD
const copyBtn = document.querySelector(".hexcode");
  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(`${copyTxt}`).then(()=>{
        document.querySelector('#myTooltip').innerHTML = 'Copied'
    });
  });

  //RESET THE COPY TOOLTIP ON MOUSEOUT FROM THE BUTTON
  copyBtn.addEventListener('mouseout', ()=>{
    document.querySelector('#myTooltip').innerHTML = 'Copy!'
  })

document.querySelector("#start").addEventListener("click", startChangingColor);

document.querySelector("#stop").addEventListener("click", stopChangingColor);
