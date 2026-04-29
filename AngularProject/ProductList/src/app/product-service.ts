import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products = [
  { name: 'Laptop', price: 50000, category: 'Electronics', rating: 4},
  { name: 'Mobile', price: 20000, category: 'Electronics', rating: 5},
  { name: 'Shoes', price: 3000, category: 'Fashion', rating: 3 },
  { name: 'Headphones', price: 2500, category: 'Electronics', rating: 4 },
  { name: 'Smart Watch', price: 7000, category: 'Electronics', rating: 4 }

];

  getProducts() {
    return this.products;
  }
}
