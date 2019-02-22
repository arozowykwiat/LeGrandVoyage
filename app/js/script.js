//détection hauteur fenêtre
var hauteur=window.innerHeight;
var largeur=window.innerWidth;
console.log('hauteur :'+hauteur);
console.log('largeur :'+largeur);

// changement de la hauteur de l'élément header en fonction de la hauteur de la fenêtre
if (largeur < hauteur) {
document.getElementsByTagName('header')[0].style.height=hauteur/1.8 + 'px';

}
else {
document.getElementsByTagName('header')[0].style.height=hauteur+ 'px';
}


