import * as express from "express";
import * as productsController from "./controllers/products_controller";

const routes = (app: express.Application) => {
  app.set("json spaces", 2);
  app.use(productsController.errors);

  app.route("/products").get(productsController.get);
  app.route("/products/:productId").get(productsController.detail);

  app.use((req: express.Request, res: express.Response) => {
    res.setHeader("Content-Type", "application/problem+json");
    res.status(404).json({
      type: "https://github.com/mediadotech/javascript_training/tree/CreateProductsInformationProgram/packages/product_information/resources/errors/url-not-found.md",
      detail: "Url is incorrect"
    });
  });
};

export default routes;
