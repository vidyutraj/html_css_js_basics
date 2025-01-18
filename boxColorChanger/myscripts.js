var button = document.querySelector('button'); //gets by selector
var box = document.getElementById('changeMe'); //gets by id

function changeColor(){ //event
    if(box.style.background == 'darkred') {
        box.style.background = 'blue';
    } else {
        box.style.background = 'darkred';
    }
}
