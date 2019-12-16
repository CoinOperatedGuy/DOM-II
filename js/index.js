// Your code goes here
let image = document.querySelector('.img');
image.addEventListener('click', (event) => {
    console.log("this is the image");
});

let headColor = document.querySelector('.logo-heading');
headColor.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'blue';
    event.target.style.color = 'white';
});

let title = document.querySelector('.destination');
title.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = 'pink';
    event.target.style.color = 'yellow';
});