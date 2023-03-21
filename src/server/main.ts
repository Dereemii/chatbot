import express from "express";
import ViteExpress from "vite-express";

const app = express();

app.get(`/hello`, (_, res) => {
  res.send(`Hello Vite + TypeScript!`);
});

const port: string  = process.env.PORT || '3000';

ViteExpress.listen(app, parseInt(port) , () =>
  console.log(`Server is listening on port ${port}..`)
);
