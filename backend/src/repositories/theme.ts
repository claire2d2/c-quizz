import { Theme } from "../entities/Theme";
import { AppDataSource } from "../lib/datasource";

export const ThemeRepository = AppDataSource.getRepository(Theme);
