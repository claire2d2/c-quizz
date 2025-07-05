import { History } from "../entities/History";
import { AppDataSource } from "../lib/datasource";

export const HistoryRepository = AppDataSource.getRepository(History);
