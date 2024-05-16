import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity("products")
export class Products extends BaseEntity {
  @PrimaryGeneratedColumn()
  product_id?: number;
  @Column({ length: 10 })
  product_name?: string;
  @Column({ length: 20 })
  description?: string;
  @Column({ length: 10 })
  available_Colors?: string[];
  @Column()
  price?: number;
  @Column()
  quantity?: number;
}
