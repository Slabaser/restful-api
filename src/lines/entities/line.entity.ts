import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Product } from '../../products/entities/product.entity';

@Entity()
export class Line {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  lineName: string;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(() => Product, (product) => product.line)
  products: Product[];
}
