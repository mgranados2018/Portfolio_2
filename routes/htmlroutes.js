var path = require("path");
var db = require("../models")

module.exports = function (app) {

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"))
    })

    app.get("/contact", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/contact.html"))
    })

    app.get("/portfolio", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/portfolio.html"))
    })

    app.get("/api/contacts", function (req, res) {
        db.contact.findAll({}).then(function (data) {
            res.json(data)
        });
    });

    app.post("/api/create",function(req,res){
        db.contact.create({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
        });

        // console.log(name+"name")
        // location.reload(true);
        res.redirect("/contact")
    })
}