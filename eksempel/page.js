

//page.js
let t = new spiller();


let profilKnap = document.querySelector("#profil"); //find knap

profilKnap.addEventListener("click", function(event) { //lytter på klik
    console.log("Har klikket på vis profil"); //knap trykket

    console.log(t.profil()); //når knap trykket
})

//===============================================================================

let aktivKnap = document.querySelector("#aktiv"); //find knap

aktivKnap.addEventListener("click", function(event) { //lytter på klik
    console.log("Har klikket på skift aktiv"); //knap trykket

    console.log(t.skiftAktiv()); //når knap trykket
})


// let spiller_1 = new spiller("Palle", "Olsn");
// let spiller_2 = new spiller("Tine", "Jensen");

// spiller_1.skiftAktiv();
// spiller_1.givPoint(5);

// spiller_2.givPoint(10);
// console.log(spiller_1.profil());
// console.log(spiller_2.profil());

//=================================================================================

//gallery

