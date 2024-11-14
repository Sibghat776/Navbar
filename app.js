let menu = document.querySelector('#menu')
let lists = document.querySelectorAll('li')
function navbar() {
    if (menu.style.maxWidth == '0px') {
        menu.style.maxWidth = '60vw';
        
    } else {
        menu.style.maxWidth = '0px'
        document.querySelector('.lis1').classList.add('noBorderBottom')
        document.querySelector('.lis2').classList.add('noBorderBottom');
        document.querySelector('.lis3').classList.add('noBorderBottom');
        document.querySelector('.lis4').classList.add('noBorderBottom');
        
    }
}