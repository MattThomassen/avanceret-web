

//spiller_class.js
class spiller {
    constructor(fornavn, efternavn) {
        this.fornavn = fornavn;
        this.efternavn = efternavn;
        this.aktiv = false;
        this.point = 0;
    }

    skiftAktiv () {
        // this.aktiv = !this.aktiv;
        return ("Aktiv sendt");
    }
    givPoint (antal) {
        this.point += antal;
    }
    profil () {
        // return `${this.fornavn} ${this.efternavn} har ${this.point} point ${this.aktiv ? "(aktiv)" : "(ikke aktiv)"}`
        return ("Profil sendt");
    }
}

