import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.POSTGRES_HOST,
  port: 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  synchronize: true,
  logging: false,
  ssl: { rejectUnauthorized: false },
  extra: {
    ssl: {
      rejectUnauthorized: false,
      sslmode: "require",
    },
  },
  entities: [User],
  migrations: [],
  subscribers: [],
});
