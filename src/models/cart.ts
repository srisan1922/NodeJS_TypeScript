import { ObjectId } from "mongodb";
import { Entity, BaseEntity, ObjectIdColumn, Column } from "typeorm";

@Entity("cart_items")
export class Cart extends BaseEntity {
  @ObjectIdColumn()
  _id: ObjectId = new ObjectId();
  @Column()
  product_id!: number;
  @Column()
  product_name?: string;
  @Column()
  color?: string;
  @Column()
  quantity?: number;
  @Column()
  total_price?: number;
}
