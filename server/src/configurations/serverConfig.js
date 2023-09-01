import "dotenv/config";

export const SERVER = {
  PORT: process.env.PORT || 3300,
  HOST: process.env.HOST || "localhost",
};
