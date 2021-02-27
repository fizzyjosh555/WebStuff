let curPhoto = document.getElementById('curPhoto');
let figCap = document.getElementById('figCap');
let checkbox = document.getElementById('toggle');
let photo = ['one.jpg', 'two.jpg', 'three.jpg', 'four.png', 'five.jpg'];
let des = ['Cute Brown Dog', 'Cute White and Brown Dog', 'Cute Black and Brown Dog',
           'Cute Brown and White Dog', 'Cute Light Tan Dog'];

let timer = setInterval(function(){ next(); }, 1500);
let i = 0;

function toggle() {
    if(!checkbox.checked) clearInterval(timer);
    else timer = setInterval(function(){ next(); }, 1500);
}

function prev(){ 
    i = (i === 0) ? photo.length - 1 : i - 1; 
    setPhoto(); 
}

function next(){ 
    i = (i === photo.length - 1) ? i = 0 : i + 1; 
    setPhoto(); 
}

function setPhoto(){ 
    figCap.innerHTML = des[i];
    curPhoto.setAttribute('src', './img/' + photo[i]);
}