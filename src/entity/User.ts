import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";

import { Role } from "./Role";
import { Post } from "./Post";
import { Comment } from "./Comment";

export enum Gender {
  male,
  female,
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column({
    type: "enum",
    enum: Gender,
  })
  gender: Gender;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => Role, (role) => role.users)
  role: Role;

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];
}
