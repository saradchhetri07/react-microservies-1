import express from "express";
import routers from "./routers/index.routes";
import { config } from "./config";

const app = express();

app.use(express.json());
app.use(routers);
app.listen(config.PORT, () => {
  console.log(`listening on port ${config.PORT}`);
});
