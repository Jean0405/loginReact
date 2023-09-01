import * as authServices from "../services/authService.js";


export const login = async (req, res)=>{
  try {
    let data = await authServices.login(req.body);
    res.status(200).json({status:200, message: "successful login ", data: data})
  } catch (error) {
    res.status(500).send({
      status: 500,
      errorInfo: {
        message: "error logging in",
        error: error.message,
      },
    });
  }
}