module.exports = function (app) {
    app.post('/upload', (req, res, next) => {
        console.log(req);
        let imageFile = req.files.file;

        imageFile.mv(`${__dirname}/public/${req.body.filename}.jpg`, function (err) {
            if (err) {
                return res.status(500).send(err);
            }

            res.json({ file: `public/${req.body.filename}.jpg` });
        });

    })
}