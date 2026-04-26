import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrls: ['./cart.css']
})
export class CartComponent {

  constructor(public cartService: CartService) {}

  get cartItems() {
    return this.cartService.getCartItems();
  }

  removeItem(index: number) {
    this.cartService.removeItem(index);
  }

  getTotalPrice() {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }
}