import express from "express";
import { middleware } from "./middlewares/middleware.js";

const app = express();
const port = process.env.PORT ?? 3000;

app.get("/", middleware);

app.listen(port, () => {
  console.log("server listening at http://localhost:%d", port);
});
