import { Router } from "express";
import * as authControllers from "../../controllers/authController.js";

const v1Auth = Router();

v1Auth
  .all("/login", authControllers.login)
  .post("/signUp", authControllers.signUp);

export default v1Auth;
