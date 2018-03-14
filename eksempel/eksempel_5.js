
class spiller {
    constructor(fornavn, efternavn) {
    this.fornavn = fornavn;
    this.efternavn = efternavn;
    this.aktiv = false;
    this.point = 0;
    }

    skiftAktiv () {
        this.aktiv = !this.aktiv;
    }
    givPoint (antal) {
        this.point += antal;
    }
    profil () {
        return `${this.fornavn} ${this.efternavn} har ${this.point} point ${this.aktiv ? "(aktiv)" : "(ikke aktiv)"}`
    }
    
}
let spillerliste = [];
spillerliste.push(new spiller("Palle", "Olsn")); //spiller 1, 2 er Instanser
spillerliste.push(new spiller("Tina", "Jensen"));

spillerliste.forEach(function(spiller) {
    spiller.givPoint(10);
    console.log(spiller.profil())
})

