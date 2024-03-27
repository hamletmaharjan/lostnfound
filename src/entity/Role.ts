import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from "typeorm";

import { User } from "./User";

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  slug: string;

  @Column("text")
  description: string;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => User, (user) => user.role)
  users: User[];
}
