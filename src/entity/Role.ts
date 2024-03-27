import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
} from "typeorm";

import { User } from "./User";
import { Permission } from "./Permission";

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

  @ManyToMany(() => Permission)
  @JoinTable()
  categories: Permission[];
}
