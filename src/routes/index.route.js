const resourcesRoutes = require("./resources/index.route");

const indexRouter = (app) => {
  resourcesRoutes(app);
};

module.exports = indexRouter;
