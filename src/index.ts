import express from "express";
import { middleware } from "./middlewares/middleware.js";
import cors from "cors";

const app = express();
const port = process.env.PORT ?? 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", middleware);

app.listen(port, () => {
  console.log("server listening at http://localhost:%d", port);
});
