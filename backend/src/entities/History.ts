import {
    Entity,
    PrimaryGeneratedColumn,
    ManyToOne,
    CreateDateColumn,
} from "typeorm";

@Entity()
export class History {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @ManyToOne("User", (user: any) => user.histories)
    user: any;

    @ManyToOne("Quiz")
    quizz: any;

    @CreateDateColumn()
    created_at: Date;
}
