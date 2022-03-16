const statusTable = require("./status-table.route");
const router = require("express").Router();

router.use("/status-table", statusTable);

module.exports = router;
