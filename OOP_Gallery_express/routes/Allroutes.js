
const db = require('.././config/sql').connect();

module.exports = function (app) {

    app.get('/', function (req, res) {
        res.render('pages/index', {
            // side: index
        });
    });



    //Henter alle informationer om alle billeder
    // app.get('/billeder', function (req, res) {
    //     db.query(`SELECT billede *, kategori.navn as kategori, fotograf.navn as fotograf
    //     FROM ((billede INNER JOIN kategori
    //     ON fk_kategori = kategori.id
    //     INNER JOIN fotograf ON fk_fotograf = fotograf.id)
    //     ORDER BY billede.id)
    //     `, (error, rows) => {
    //         res.json(rows);
    //     });
    // });

    // Henter billede af bestemt kategori
        app.get('/billeder', function (req, res) {
            db.query("SELECT `billede`.*, `kategori`.`navn` as 'kategori', `fotograf`.`navn` as 'fotograf' FROM(( `billede` INNER JOIN `kategori` ON `fk_kategori` = `kategori`.`id`) INNER JOIN `fotograf` ON `fk_fotograf` = `fotograf`.`id`) ORDER BY `billede`.`id`", (error, rows) => {
                res.json(rows);
            });
        });


    //Henter alle kategori med id og navn
    app.get('/kategori', function (req, res) {
        db.query(`SELECT kategori.id, kategori.navn FROM kategori`, (error, data) => {
            res.json(data);
        });
    });

    app.get('/images', function (req, res) {
        db.query(`SELECT billede.id, billede.titel FROM billede`,  (error, rows) => {
            res.json(rows);
        });
    });












        // app.get('/billeder/:kategori', function (req, res) {
    //     db.query(`
    //     SELECT billede.*, kategori.navn AS katnav, fotograf.navn AS fotnav
    //     FROM ((billede
    //     INNER JOIN katnav
    //     ON fk_kategori = kategori.id)
    //     INNER JOIN fotnav
    //     ON fk_fotograf = fotograf.id)
    //     ORDER BY billede.id
    //     `, (error, rows) => {
    //         res.json(rows);
    //     });
    // });
}



