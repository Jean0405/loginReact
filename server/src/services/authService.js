import { connDB } from "../databases/connectDB.js";

//LOG IN
export const login = async (info) => {
  let db = await connDB();
  let collection = db.collection("users");
  let resultado = await collection
    .find({ email: info.email, password: info.password })
    .toArray();

  return resultado;
};

//REGISTER

export const signUp = async (info) => {
  let db = await connDB();
  let collection = db.collection("users");

  let user = await collection.find({ email: info.email }).toArray();

  if (!user.length) {
    await collection.insertOne(info);
    return true
  } else {
    return false;
  }
};
