import { BaseEntity } from '../base'

export interface ProductProps {
  name: string
}

export class Product extends BaseEntity<ProductProps> {}
