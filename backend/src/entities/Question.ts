import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";
import { Theme } from "./Theme";

@Entity()
export class Question {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @ManyToOne(() => Theme, (theme) => theme.questions)
    theme: Theme;

    @Column()
    question: string;

    @Column("simple-array")
    options: string[];

    @Column()
    answer: string;

    @Column({ nullable: true })
    explanation: string;

    @Column("simple-array", { nullable: true })
    links: string[];

    @Column({ default: 0 })
    nb_answered: number;

    @Column({ default: 0 })
    nb_success: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
