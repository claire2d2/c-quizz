import { User } from "../entities/User";
import { AppDataSource } from "../lib/datasource";

export const UserRepository = AppDataSource.getRepository(User);
