const statusTable = require("./status-table.route");

const indexRouter = (app) => {
  app.use("/status-table", statusTable);
};

module.exports = indexRouter;
