import "reflect-metadata";
import dotenv from "dotenv";

dotenv.config();

import { AppDataSource } from "./data-source";
import { User } from "./entity/User";

import { Gender } from "./entity/User";
import { Role } from "./entity/Role";

AppDataSource.initialize()
  .then(async () => {
    // console.log("Inserting a new user into the database...");

    // const role = new Role();
    // role.name = "admin";
    // role.slug = "admin";
    // role.description = "admin";
    // await AppDataSource.manager.save(role);
    // const user = new User();
    // user.firstName = "Carlos";
    // user.lastName = "Condit";
    // user.username = "nbk";
    // user.email = "condit@live.com";
    // user.password = "condit";
    // user.gender = Gender.male;
    // user.role = role;
    // await AppDataSource.manager.save(user);
    // console.log("Saved a new user with id: " + user.id);

    // console.log("Loading users from the database...");
    // const users = await AppDataSource.manager.find(User);
    // console.log("Loaded users: ", users);

    console.log(
      "Here you can setup and run express / fastify / any other framework."
    );
  })
  .catch((error) => console.log(error));
