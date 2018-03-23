

// class.js


class Gallery {
    constructor(name, images) { //constructor er opretter object
        this.name = name;       //this er ovject navn og efter punktummet er property navnet.
        this.images = images;
        this.pos = 0;
        this.setEventHandlers();
    }
    //metoder kommer here
    setEventHandlers() {//definere objecterne øverst
        let that = this;
        document.querySelector(`#${this.name} .oopgallery-control-first`).addEventListener("click", function () {
            document.querySelector(`#${that.name} .oopgallery-image`).src = that.getFirst();
            document.querySelector(`#${that.name} .oopgallery-image-number`).innerHTML = "1 / 7";
        })

        document.querySelector(`#${this.name} .oopgallery-control-last`).addEventListener("click", function () {
            document.querySelector(`#${that.name} .oopgallery-image`).src = that.getLast();
            document.querySelector(`#${that.name} .oopgallery-image-number`).innerHTML = "7 / 7";
        })

        document.querySelector(`#${this.name} .oopgallery-control-next`).addEventListener("click", function () {
            document.querySelector(`#${that.name} .oopgallery-image`).src = that.getNext();
            document.querySelector(`#${that.name} .oopgallery-image-number`).innerHTML = that.pos + 1 + " / 7";
        })

        document.querySelector(`#${this.name} .oopgallery-control-previous`).addEventListener("click", function () {
            document.querySelector(`#${that.name} .oopgallery-image`).src = that.getPrev();
            document.querySelector(`#${that.name} .oopgallery-image-number`).innerHTML = that.pos + 1 + " / 7";
        })

        document.querySelector(`#${that.name} .oopgallery-image`).src = this.getFirst();
    }


    getFirst() {//definere objecterne øverst
        this.pos = 0;
        return this.images[this.pos]; //retuneres billedets position
    }

    getLast() {//definere objecterne øverst
        this.pos = this.images.length - 1;
        return this.images[this.pos];
    }

    getNext() {//definere objecterne øverst
        if (this.pos < this.images.length - 1) {
            this.pos++;
        } else {
            this.pos = 0;
        }
        return this.images[this.pos];
    }

    getPrev() {//definere objecterne øverst
        if (this.pos > 0) {
            this.pos--;
        } else {
            this.pos = this.images.length - 1;
        }
        return this.images[this.pos];
    }

}





