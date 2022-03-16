const router = require("express").Router();
// const storage = require('../../common/storage');
const {
  index,
  store,
  destroy,
} = require("../../controllers/status-table.controller.js");

router.get("/", index);

// router.post('/create/', storage.single('file'), storePdf);
router.post("/create/", store);

router.get("/:id/delete", destroy);

module.exports = router;
