
// Setting the background color

let body = document.body;
body.style.backgroundColor = `bisque`

// This event will turn the header red

function makeRed(details) {
    details.target.style.color = `red`;
}
let header = document.getElementById(`header`);
header.addEventListener(`click`, makeRed);

// This will change the image on mouse over

function changeImg(details) {
    details.target.src = `https://www.comingsoon.net/assets/uploads/2018/08/conair-618x360.jpg`;
}
let image = document.getElementById(`cage`);
image.addEventListener(`mouseover`,changeImg);

// This should change background color on space bar

function changeColor(details) {
    details.target.style.color = `aqua`;
}

let Color = document.getElementById(`secondHeader`); 
    Color.addEventListener(`keydown`,changeColor);   
 