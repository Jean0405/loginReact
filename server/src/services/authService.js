import {connDB} from "../databases/connectDB.js"

export const login = async(info)=>{
let db = await connDB();
let collection = db.collection("users");
let resultado = await collection.find({email: info.email, password: info.password}).toArray();

if(!resultado) return res.status(404).json("unregistered user");

return resultado;
}