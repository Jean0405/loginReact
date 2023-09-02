import "dotenv/config";

export const SERVER = {
  PORT: process.env.PORT || 3300,
  HOST: process.env.HOST || "localhost",
};

export const database = {
  USER: process.env.USER,
  PASSWORD: process.env.PASSWORD,
  DB: process.env.DB,
};
