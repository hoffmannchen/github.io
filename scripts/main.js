/**
 * Created by hoffm on 2016/12/21.
 */
var myImg=document.querySelector("img");
var myButton=document.querySelector('button');
var myHeading=document.querySelector('h1');
myImg.onclick=function() {
    var mySrc = myImg.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png') {
        myImg.setAttribute('src', 'images/moon.png');
    }
    else {
        myImg.setAttribute('src', 'images/firefox-icon.png');
    }
};
function setUserName(){
    var myName=prompt("Please enter your name.");
    localStorage.setItem('name',myName);
    myHeading.textContent('Mozilla is cool, '+myName);
}