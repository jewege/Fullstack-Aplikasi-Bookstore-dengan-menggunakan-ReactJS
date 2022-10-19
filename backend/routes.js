const akses = require("express").Router();
const BukuModel = require("./model.js");

akses.route("/").get((req, res) => {
  BukuModel.find()
    .then((books) => res.status(200).json(books))
    .catch((error) => res.status(400).json(error.message));
});

akses.route("/delete/:id").delete((req, res) => {
  BukuModel.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json("Buku Dihapus"))
    .then((error) => res.status(400).json(error.message));
});

akses.route("/update/:id").put((req, res) => {
  BukuModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updateBook) => res.status(200).json(updateBook))
    .then((error) => res.status(400).json(error.message));
});

akses.route("/add/").post((req, res) => {
  BukuModel.create(req.body)
    .then((createBook) => res.status(200).json(createBook))
    .then((error) => res.status(400).json(error.message));
});

module.exports = akses;
