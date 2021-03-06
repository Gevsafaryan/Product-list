import { Category } from "./Category";

export interface Item {
  sku: number
  name: string
  type: string
  price: number
  upc: string
  category: [Category]
  shipping: number
  description: string
  manufacturer: string
  model: string
  url: string
  image: string
}