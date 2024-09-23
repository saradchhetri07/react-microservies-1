import dotenv from "dotenv";

dotenv.config({ path: __dirname + "/../.env" });

export const config = {
  PORT: process.env.PORT,
};
