import { Router } from "express";
import * as authControllers from "../../controllers/authController.js";

const v1Auth = Router();

v1Auth.use("/login", authControllers.login);

export default v1Auth;