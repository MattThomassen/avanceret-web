
// I denne fil skal du benytte dig af de objekter, properties og funktioner, som du har defineret i "oop_gallery.js".
// Her er det tilladt at referere til specifikke gallerier, som f.eks. galleri01, galleri02, osv.


document.addEventListener("DOMContentLoaded", function (event) {
    let gallery1 = new OOPGallery([ //giver alle billederne og dens værdi til gallery 1. new laver en instance
        "image_01.jpg",
        "image_02.jpg",
        "image_03.jpg",
        "image_04.jpg",
        "image_05.jpg",
        "image_06.jpg",
        "image_07.jpg"
    ]);
    let gallery2 = new OOPGallery([
        "image_01.jpg",
        "image_02.jpg",
        "image_03.jpg",
        "image_04.jpg",
        "image_05.jpg",
        "image_06.jpg",
        "image_07.jpg"
    ]);
    let gallery1que = document.querySelector("#gallery01"); //Du binder et bestem id til et let.
    let gallery2que = document.querySelector("#gallery02");

    let loadPos = document.querySelectorAll(".oopgallery-image");
    let text = document.querySelectorAll(".oopgallery-image-number");

    gallery1.onLoadImage(loadPos[0]); //giver gallery1 en onloadimage som loader den først billedet i den første array
    gallery2.onLoadImage(loadPos[1]);

    gallery1.changeText(text[0]);
    gallery2.changeText(text[1]);

    let knap = document.querySelectorAll(".oopgallery-control-next"); //når der bruges querySelectorAll retunere alle class med den navn
    let knap2 = document.querySelectorAll(".oopgallery-control-previous");

    let knap3 = document.querySelectorAll(".oopgallery-control-first");
    let knap4 = document.querySelectorAll(".oopgallery-control-last");


    //Gallery 1

    knap[0].addEventListener("click", function (event) {//lytter på knap klik
        gallery1.getNext(); //his der bliver klikket kald getNext i gallery 1
        gallery1.changeImage(loadPos[0], text[0]); //kalder changeImage, hvor den skifter loadpos som er billedet og text
    }); 
    knap2[0].addEventListener("click", function (event) {
        gallery1.getPrevious();
        gallery1.changeImage(loadPos[0], text[0]);
        // console.log("klikket previous");        
    });
    knap3[0].addEventListener("click", function(event) {
        gallery1.getFirst();
        gallery1.changeImage(loadPos[0], text[0]);
    })
    knap4[0].addEventListener("click", function(event) {
        gallery1.getLast();
        gallery1.changeImage(loadPos[0], text[0]);
    // console.log("klikket get last");
        
    })


//Gallery 2

    knap[1].addEventListener("click", function (event) {
        gallery2.getNext();
        gallery2.changeImage(loadPos[1], text[1]);
    });
    knap2[1].addEventListener("click", function (event) {
        gallery2.getPrevious();
        gallery2.changeImage(loadPos[1], text[1]);
    });
    knap3[1].addEventListener("click", function(event) {
        gallery1.getFirst();
        gallery1.changeImage(loadPos[1], text[1]);
    })
    knap4[1].addEventListener("click", function(event) {
        gallery1.getLast();
        gallery1.changeImage(loadPos[1], text[1]);
    })
});














































// document.addEventListener ("DOMContentLoaded", function (event) {

// let galleri01 = new OOPGallery (['image_01.jpg','image_02.jpg','image_03.jpg','image_04.jpg','image_05.jpg','image_06.jpg','image_07.jpg']);
// let galleri02 = new OOPGallery (['image_01.jpg','image_02.jpg','image_03.jpg','image_04.jpg','image_05.jpg','image_06.jpg','image_07.jpg']);

// let image = document.querySelectorAll(".oopgallery-image"); 

// galleri01.getImage(image[0]); //du siger galleri01 tager image 0 i array med getImage i class OOPgallery
// galleri02.getImage(image[1]); 



// //===================================================================================================================================================



// //Buttons

// let knap01 = document.querySelector(".oopgallery-control-next");
// let knap02 = document.querySelector(".oopgallery-control-previous");

// knap01.addEventListener("click", function(event) {
//     console.log("Der blevet klikket frem");
// });

// knap02.addEventListener("click", function(event) {
//     console.log("Der blevet klikket tilbage");
// });



// });
