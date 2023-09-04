import "dotenv/config";

export const SERVER = {
  PORT: process.env.PORT || 3300,
  HOST: process.env.HOST || "127.25.25.27",
};

export const database = {
  USER: process.env.USER || "jean0405",
  PASSWORD: process.env.PASSWORD || "yewisaje",
  DB: process.env.DB || "crud_react",
};
