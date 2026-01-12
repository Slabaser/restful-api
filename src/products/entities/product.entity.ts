import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Line } from '../../lines/entities/line.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  productCode: string;

  @Column('int')
  targetCount: number;

  @ManyToOne(() => Line, (line) => line.products)
  line: Line;
}