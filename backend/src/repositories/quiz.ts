import { Quiz } from "../entities/Quiz";
import { AppDataSource } from "../lib/datasource";

export const QuizRepository = AppDataSource.getRepository(Quiz);
