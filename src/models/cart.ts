import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("cart_items")
export class Cart extends BaseEntity {
  @PrimaryGeneratedColumn()
  product_id?: number;
  @Column()
  product_name?: string;
  @Column()
  color?: string;
  @Column()
  no_of_items?: number;
  @Column()
  total_price?: number;
}
