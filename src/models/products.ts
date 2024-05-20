import { ObjectId } from "mongodb";
import { Entity, ObjectIdColumn, Column, BaseEntity } from "typeorm";

@Entity("products")
export class Products extends BaseEntity {
  @ObjectIdColumn()
  product_id: ObjectId = new ObjectId();
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
