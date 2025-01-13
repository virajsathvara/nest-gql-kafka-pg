import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../foundation/base.entity';

@Entity('users')
export class User extends BaseEntity {
  @Column({ type: 'varchar', length: 100, nullable: false })
  username: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  password: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  role: string;

  // @Column()
  // address: string;
}
