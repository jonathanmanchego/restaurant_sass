const { StatusTable } = require("../../models");

module.exports = {
  index: async (req, res) => {
    let data = [];
    try {
      data = await StatusTable.findAll();
    } catch (e) {
      console.error(e);
    }
    res.json({
      results: data,
    });
  },
  store: async (req, res) => {
    /* if (!req.file) res.redirect("/pdf/create");

    const { name } = req.body;
    const { filename } = req.file;
    const pdfToCreate = await Pdf.create({
      name,
      url: filename,
    });
    try {
      await pdfToCreate.save();
      res.json({});
    } catch (e) {
      console.error(e);
      res.json({});
    } */
  },
  destroy: async (req, res) => {
    /* const { id } = req.params;
    try {
      await Pdf.destroy({
        where: {
          id,
        },
      });
      res.json({});
    } catch (e) {
      console.error(e);
      res.json({});
    } */
  },
};
