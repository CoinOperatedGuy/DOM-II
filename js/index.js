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

let title = document.querySelector('.content-pick');
title.addEventListener('mouseenter', (event) => {
    event.target.style.backgroundColor = 'pink';
    event.target.style.color = 'yellow';
});
title.addEventListener('mouseleave', (event) => {
    event.target.style.backgroundColor = '';
    event.target.style.color = '';
});

const clickMe = document.getElementsByClassName('btn');
console.log(clickMe);
clickMe[0].addEventListener('click', (event) => {
    console.log('button clicked');
});
clickMe[1].addEventListener('click', (event) => {
    alert('you clicked me!');
});

image.addEventListener('dblclick', (event) => {
    event.target.style.display = 'none';
});

headColor.addEventListener('dblclick', (event) => {
    event.target.style.backgroundColor = '';
    event.target.style.color = '';
});

let foot = document.getElementsByClassName('footer');
foot[0].addEventListener('mouseover', (event) => {
    event.target.style.fontSize = '5rem';
});

let nav = document.getElementsByClassName('nav-link');
nav[0].addEventListener('mouseover', (event) => {
    event.target.style.fontSize = '2rem';
});
nav[1].addEventListener('mouseover', (event) => {
    event.target.style.fontSize = '2rem';
});
nav[2].addEventListener('mouseover', (event) => {
    event.target.style.fontSize = '2rem';
});
nav[3].addEventListener('mouseover', (event) => {
    event.target.style.fontSize = '2rem';
});

const stopLink = document.querySelector('.nav-link');
stopLink.addEventListener('click', (event) => {
    if (true === false) {
        event.preventDefault();
    }
});