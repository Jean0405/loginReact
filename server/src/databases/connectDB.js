import "dotenv/config";
import { database } from "../configurations/serverConfig.js";
import { MongoClient } from "mongodb";


const URI = `mongodb+srv://${database.USER}:${database.PASSWORD}@practica.4b4nkjj.mongodb.net/${database.DB}`;

export async function connDB() {
  console.log(database.USER);
  const client = new MongoClient(URI);
  try {
    await client.connect();
    const db = client.db();
    return db;
  } catch (error) {
    throw new Error({ message: "CONEXIÓN RECHAZADA", error: error.message });
  }
}