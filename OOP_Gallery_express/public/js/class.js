

// class.js


class Gallery {
    constructor(name, images) { //constructor er opretter object
        this.name = name;       //this er ovject navn og efter punktummet er property navnet.
        this.images = images;
        this.pos = 0;
        this.getData();
    }
    //metoder kommer here
    getData() {
        let that = this;
        fetch('http://localhost:6060/billeder/')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                data.forEach((img) => {
                    // that.images.push(new Image(img.id, img.titel, img.filnavn, img.dato, img.navn))
                    that.images.push(new Image(img.id, img.titel, img.kategori, img.filnavn, img.dato, img.fotograf))
                    // console.log("test1", img.filnavn);
                });
                this.setEventHandlers();
                this.billedeInform();

            })
    }
    setEventHandlers() {//kalder det øverst i fetch
        let that = this;
        document.querySelector(`#${that.name} .oopgallery-image`).src = ".././images/" + this.getFirst();
        document.querySelector(`#${that.name} .inform`).innerHTML = that.billedeInform();
        document.querySelector(`#${that.name} .oopgallery-image-number`).innerHTML = "1 / 7";
        

        document.querySelector(`#${this.name} .oopgallery-control-first`).addEventListener("click", function () {
            document.querySelector(`#${that.name} .oopgallery-image`).src = ".././images/" + that.getFirst();
            document.querySelector(`#${that.name} .oopgallery-image-number`).innerHTML = "1 / 7";
            document.querySelector(`#${that.name} .inform`).innerHTML = that.billedeInform();
        })

        document.querySelector(`#${this.name} .oopgallery-control-last`).addEventListener("click", function () {
            document.querySelector(`#${that.name} .oopgallery-image`).src = ".././images/" + that.getLast();
            document.querySelector(`#${that.name} .oopgallery-image-number`).innerHTML = "7 / 7";
            document.querySelector(`#${that.name} .inform`).innerHTML = that.billedeInform();
        })

        document.querySelector(`#${this.name} .oopgallery-control-next`).addEventListener("click", function () {
            document.querySelector(`#${that.name} .oopgallery-image`).src = ".././images/" + that.getNext();
            document.querySelector(`#${that.name} .oopgallery-image-number`).innerHTML = that.pos + 1 + " / 7";
            document.querySelector(`#${that.name} .inform`).innerHTML = that.billedeInform();
        })

        document.querySelector(`#${this.name} .oopgallery-control-previous`).addEventListener("click", function () {
            document.querySelector(`#${that.name} .oopgallery-image`).src = ".././images/" + that.getPrev();
            document.querySelector(`#${that.name} .oopgallery-image-number`).innerHTML = that.pos + 1 + " / 7";
            document.querySelector(`#${that.name} .inform`).innerHTML = that.billedeInform();

        })

    }

    billedeInform() {
        let that = this;
        return `
        <p><b>Kategori:</b> ${this.images[this.pos].kategori}</p>       
        <p><b>Titel:</b> ${this.images[this.pos].titel}</p>
        <p><b>Fotograf:</b> ${this.images[this.pos].fotograf}</p>
        <p><b>Taget:</b> ${this.images[this.pos].dato}</p>
        `;
    }

    getFirst() {//definere objecterne øverst
        this.pos = 0;
        return this.images[this.pos].filnavn; //retuneres billedets position
    }

    getLast() {//definere objecterne øverst
        this.pos = this.images.length - 1;
        return this.images[this.pos].filnavn;
        // console.log("test2", this.filnavn);
    }

    getNext() {//definere objecterne øverst
        if (this.pos < this.images.length - 1) {
            this.pos++;
        } else {
            this.pos = 0;
        }
        return this.images[this.pos].filnavn;
    }

    getPrev() {//definere objecterne øverst
        if (this.pos > 0) {
            this.pos--;
        } else {
            this.pos = this.images.length - 1;
        }
        return this.images[this.pos].filnavn;
    }

}

class Image {
    constructor(id, titel, kategori, filnavn, dato, fotograf) {
        this.id = id;
        this.titel = titel;
        this.kategori = kategori;
        this.filnavn = filnavn;
        this.dato = dato;
        this.fotograf = fotograf;
    }
}



























