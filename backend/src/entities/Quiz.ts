import { Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable } from "typeorm";
import { Question } from "./Question";

@Entity()
export class Quiz {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @ManyToMany(() => Question)
    @JoinTable()
    questions: Question[];
}
