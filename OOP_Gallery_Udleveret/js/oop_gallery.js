
// Denne fil må kun indeholde definitionen på gallery objektet.
// Altså må der ikke stå "new OOPGallery()" nogen steder i denne fil.

// Hvis en hjemmeside f.eks. har 3 gallerier på samme underside,
// så må de 3 gallerier IKKE nævnes specifikt her!

// Spørg, hvis du er i tvivl omkring reglerne.


class OOPGallery {
    constructor(images){
        this.images = images;
        this.position = 0;
    }
    onLoadImage(loadPos){
		loadPos.src = "images/"+this.images[0]; //loader billedet når siden laodes
        // loadPos.src = "images/"+this.images[Math.floor(Math.random() * 7)]; //loader billedet når siden laodes
		
    }
    getFirst(){
		this.position = 0; //henter position i array
        return this.images[0]; //retuneres billedet som er 0 i array
    }
    getNext(){
        if (this.position == this.images.length-1) { //hvis positions billedet er det samme som billedets længde - 1
            this.getFirst(); //så kalder den function getFirst
            this.position = 0; // og position er = 0
        }else{ //ellers
            this.position++; //skal den bare sige billedets position og pluse med 1.
            return this.images[this.position]; // retuneres billedet og billedets position efter.
        }
    }
    getLast(){
		this.position = this.images.length-1; //billedets længde giver sin værdi til this position so mer 0 - 1 som så går tilbage til 7 i array.
        return this.images[this.images.length-1]; //retuneres images nuværende længde
    }
    getPrevious(){
        if (this.position == 0) { //hvis positions er det samme som 0
            this.getLast(); //kald function getLast
            this.position = this.images.length-1; // Det samme sker i getLast function ovenover
        }else{
            this.position--; // ellers skal den sige positition minus 1
            return this.images[this.position]; //retunere billedet position så den viser billedet før.
        }
    }
    changeText(text){// der bilevet ændret i html, den viser nummer på billedets nummer af billedets arrays længde
        text.innerHTML = this.position+1+'/'+this.images.length;
    }
    changeImage(loadPos, textEdit){
        loadPos.src = "images/"+this.images[this.position]; //skifter billedet 
        this.changeText(textEdit); //skifter teksten
    }
}








































// class OOPGallery {
// 	constructor(name) {
// 		this.galleryName = name;
// 		this.galleryNummer = 0;
// 	}
// 	getImage (image) {
// 		image.src = "images/"+this.galleryName[0];
// 	}
// 	nextImage () {
// 		this.galleryNummer++;
// 		return this.galleryName[this.galleryNummer];
// 		//Den retunere image array [Firkant parenteser fordi det er et array] og dens nummer
// 	}
// 	prevImage () {
// 		this.galleryNummer--;
// 		return this.galleryName[this.galleryNummer];
// 		//Den retunere image array [Firkant parenteser fordi det er et array] og dens nummer
// 	}

// 	// Deklarér properties og definér funktioner/metoder her.

// }