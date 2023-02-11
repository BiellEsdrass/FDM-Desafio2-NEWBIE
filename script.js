const iconView = document.getElementById('iconView');
const blurBg = document.getElementById('imgPrincipal');



function blurOn(){
    blurBg.src='images/image-equilibriumBLUR.jpg'
}
function blurOff(){
    blurBg.src='images/image-equilibrium.jpg'
}




blurBg.addEventListener('mouseover', blurOn);



blurBg.addEventListener('mouseleave', blurOff);