import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { CartService } from './cart';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.html'
})
export class AppComponent {

  cartCount: number = 0;

  constructor(private cartService: CartService) {}

  ngDoCheck() {
    this.cartCount = this.cartService.getCartItems().length;
  }
}