import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { CartService } from '../service/CartService';
import { ReceiptService } from '../service/ReceiptService';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shopping-cart',
  standalone: true, // Mark the component as standalone
  templateUrl: '../components_html/shopping_cart.html', // Ensure the path is correct
  styleUrls: ['../components_css/shoppingcart.css'], // Ensure the path is correct
  imports: [CommonModule], // Import CommonModule to use Angular directives like *ngFor
})
export class ShoppingCartComponent implements OnInit {
  products: Product[] = [];
  total: number = 0;

  constructor(
    private cartService: CartService, 
    private receiptService: ReceiptService
  ) {}

  ngOnInit() {
    this.products = this.cartService.getItems();
    this.total = this.cartService.getTotalPrice();
  }

  removeFromCart(productId: number) {
    this.cartService.removeItem(productId);
    this.updateCart();
  }

  updateCart() {
    this.products = this.cartService.getItems();
    this.total = this.cartService.getTotalPrice();
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    this.updateCart();
  }

  checkout() {
    this.receiptService.generateReceipt(this.products, this.total);
    this.cartService.clearCart();
    this.updateCart();
  }
}
