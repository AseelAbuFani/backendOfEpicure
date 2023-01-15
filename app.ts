import routes from "./routes/index";
import { connectDb } from "./db/index";
import bodyParser from "body-parser";

const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded());
app.use(routes);

connectDb().then(async () => {
  app.listen(3001, () => console.log("Listening on http://localhost:3001"));
});
export default app;