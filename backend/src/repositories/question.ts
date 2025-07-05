import { Question } from "../entities/Question";
import { AppDataSource } from "../lib/datasource";

export const QuestionRepository = AppDataSource.getRepository(Question);
