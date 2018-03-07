
class spiller {
    constructor(fornavn, efternavn) {
    this.fornavn = fornavn
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
    static hentspilleliste() {
        let liste = [];
        liste.push(new spiller("Tina", "Jensen"));
        liste.push(new spiller("Palle", "Olsn"));       
        liste.push(new spiller("Niels", "Petersen"));
        return liste;
    }
    static findspiller (liste = [], search = "") {
        liste.forEach(spiller => {
            if (spiller.fornavn.toLowerCase()
                .indexOf(search.toLowerCase()) > -1) {
                console.log(spiller.profil());
            }
        });
    }
}
let spillerliste = spiller.hentspilleliste();

spiller.findspiller(spillerliste, "AM");

console.log(spillerliste);


