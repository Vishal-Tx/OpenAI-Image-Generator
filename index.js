import * as dotenv from "dotenv";
dotenv.config();

import Express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import openaiRoutes from "./routes/openaiRoutes.js";

const app = Express();
const port = process.env.PORT || 5000;

app.use(Express.json());
app.use(Express.urlencoded({ extended: false }));
app.use(cors());

app.use("/openai", openaiRoutes);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
