import { Router } from "express";
import * as authControllers from "../../controllers/authController.js";
import { registerSchema } from "../../models/authSchemas.js";

const v1Auth = Router();

v1Auth
  .all("/login", authControllers.login)
  .post("/signUp", registerSchema, authControllers.signUp);

export default v1Auth;
