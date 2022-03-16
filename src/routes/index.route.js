const resourcesRoutes = require("./resources/index.route");
const router = require("express").Router();

router.use("/resources", resourcesRoutes);

const indexRouter = (app) => {
  app.get("/", (req, res) => res.send("hola"));
  app.use("/api-v1/", router);
};

module.exports = indexRouter;
