import * as authServices from "../services/authService.js";

export const login = async (req, res) => {
  try {
    let data = await authServices.login(req.body);

    if (!data.length) {
      res.status(404).json({
        status: 404,
        message: "user not found ",
        data: req.body.email,
      });
    } else {
      res.status(200).json({ status: 200, message: "user found", data: data[0] });
    }
  } catch (error) {
    res.status(500).send({
      status: 500,
      errorInfo: {
        message: "error logging in",
        error: error.message,
      },
    });
  }
};

export const signUp = async (req, res) => {
  try {
    let data = await authServices.signUp(req.body);

    if (data) {
      res
        .status(200)
        .json({ status: 200, message: "user successfully registered", data: {
          username: req.body.username, 
          email: req.body.email}});
    } else {
      res.status(409).json({ status: 409, message: "user already exists" });
    }
  } catch (error) {
    res.status(500).send({
      status: 500,
      errorInfo: {
        message: "error registering",
        error: error.message,
      },
    });
  }
};
