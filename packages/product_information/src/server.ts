import * as bodyParser from "body-parser";
import * as express from "express";
import routes from "./api/routes";

const HOST = "localhost";
const PORT = 5000;

const app = express();
app.use(bodyParser.json());
routes(app);
app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`)
});

export default app;