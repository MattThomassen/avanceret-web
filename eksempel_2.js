let spiller = function(fornavn, efternavn) {
    this.fornavn = fornavn,
    this.efternavn = efternavn,
    this.aktiv = false,
    this.point = 0,
    this.skiftAktiv = function () {
        this.aktiv = !this.aktiv;
    },
    this.givPoint = function(antal) {
        this.point += antal;
    },
    this.profil = function () {
        return `${this.fornavn} ${this.efternavn} har ${this.point} point ${this.aktiv ? "(aktiv)" : "(ikke aktiv)"}`
    }
    
}
let spiller_1 = new spiller("Palle", "Olsn");
let spiller_2 = new spiller("Tine", "Jensen");

spiller_1.skiftAktiv();
spiller_1.givPoint(5);

spiller_2.givPoint(10);
console.log(spiller_2.profil());