var myImg = document.querySelector('img');

myImg.onclick = function() {
    var mySrc = myImg.getAttribute('src');
    if(mySrc === 'images/01.png') {
        myImg.setAttribute('src', 'images/02.png');
    }else {
        myImg.setAttribute('src', 'images/01.png');
    }
}

var myButton =document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
}else {
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mozilla is cool ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}