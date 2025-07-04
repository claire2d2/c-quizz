import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    CreateDateColumn,
} from "typeorm";
import { Question } from "./Question";

@Entity()
export class Theme {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    label: string;

    @OneToMany(() => Question, (question) => question.theme)
    questions: Question[];

    @CreateDateColumn()
    created_at: Date;
}
