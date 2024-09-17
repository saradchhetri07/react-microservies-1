import express from "express";
import cors from "cors";
import { config } from "./config";
import routers from "./routes/index.routes";

const app = express();
app.use(cors());
app.use(express.json());
app.use(routers);
app.listen(config.PORT, () => {
  console.log(`Listening on port ${config.PORT}`);
});
