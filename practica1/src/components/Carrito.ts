import { Component } from '@angular/core';
import { Product } from '../models/Product';
import { CartService } from '../service/CartService';

@Component({
  selector: 'app-shopping-cart', // Unique selector for the shopping cart
  templateUrl: '../components_html/shopping_cart.html', // Make sure the path matches your structure
  styleUrls: ['../components_css/shoppingcart.css'] // Correct style path
})
export class ShoppingCartComponent {
  // Cart items, fetched from the cart service
  cartItems: Product[] = [];

  constructor(private cartService: CartService) {
    this.cartItems = this.cartService.getItems(); // Fetch items from cart service
  }

  // Remove a product from the cart
  removeFromCart(productId: number) {
    this.cartService.removeItem(productId);
    this.cartItems = this.cartService.getItems(); // Update cart items
  }
}
