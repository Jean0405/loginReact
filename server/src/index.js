console.clear();
import express from "express";
import cors from "cors";
import { SERVER } from "./configurations/serverConfig.js";

const APP = express();

//MIDDLEWARES
APP.use(cors());
APP.use(express.json());

//ROUTES
APP.all("/login", async (req, res) => {
  const { email, passowrd } = req.body;
  res.status(200).json({
    status: 200,
    message: "USUARIO ENCONTRADO",
    results: { email, passowrd },
  });
});

//SERVER LISTEN
APP.listen(SERVER.PORT, () =>
  console.log(`🚀 Server running http://${SERVER.HOST}:${SERVER.PORT}`)
);
