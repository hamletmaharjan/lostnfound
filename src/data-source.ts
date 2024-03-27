import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";
import { Role } from "./entity/Role";
import { Post } from "./entity/Post";
import { Permission } from "./entity/Permission";
import { Comment } from "./entity/Comment";

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
  entities: [Role, User, Post, Permission, Comment],
  migrations: [],
  subscribers: [],
});
