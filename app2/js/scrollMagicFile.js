$(document).ready(function(){

    //init scroll magic
    var controller = new ScrollMagic.Controller();

    //build a scene
    var ourScene = new ScrollMagic.Scene({
        triggerElement:"#two"
    })
    .setClassToggle('#two','fade-in')// add class to panel.two
    .addTo(controller);
});
