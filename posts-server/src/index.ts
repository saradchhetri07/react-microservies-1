import express from "express";
import { config } from "./config";
import routers from "./routes/index.routes";

const app = express();

app.use(express.json());
app.use(routers);

app.listen(config.PORT, () => {
  console.log(`v10`);

  console.log(`Listening on port ${config.PORT}`);
});
