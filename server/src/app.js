console.clear();
import { SERVER } from "./configurations/serverConfig.js";
import express from "express";
import cors from "cors";
import V1 from "./v1/index.js";

const APP = express();

//MIDDLEWARES
APP.use(cors());
APP.use(express.json());

//ROUTES
// APP.all("/login", async (req, res) => {
//   const { email, passowrd } = req.body;
//   res.status(200).json({
//     status: 200,
//     message: "USUARIO ENCONTRADO",
//     results: { email, passowrd },
//   });
// });
APP.use("/", V1)

//SERVER LISTEN
APP.listen(SERVER.PORT, () =>
  console.log(`🚀 Server running http://${SERVER.HOST}:${SERVER.PORT}`)
);
