import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { CartService } from '../service/CartService';
import { ReceiptService } from '../service/ReceiptService'; // Assuming ReceiptService is being used

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './components_html/product_catalog.html', // Make sure this path is correct
  styleUrls: ['./productcomponent.css'] // Make sure this path is correct
})
export class ShoppingCartComponent implements OnInit {
  products: Product[] = [];
  total: number = 0;

  constructor(
    private cartService: CartService, 
    private receiptService: ReceiptService
  ) {}

  // Initialization logic
  ngOnInit() {
    this.products = this.cartService.getItems(); // Fetch items from the cart
    this.total = this.cartService.getTotalPrice(); // Fetch the total price
  }

  // Remove product from the cart
  removeFromCart(productId: number) {
    this.cartService.removeItem(productId); // Remove the item
    this.updateCart(); // Update the cart view
  }

  // Update cart values (total, items)
  updateCart() {
    this.products = this.cartService.getItems(); // Get the updated items
    this.total = this.cartService.getTotalPrice(); // Update the total price
  }

  // Add product to the cart
  addToCart(product: Product) {
    this.cartService.addToCart(product); // Add product to the cart
    this.updateCart(); // Update cart
  }

  // Checkout logic
  checkout() {
    // Generate the receipt using the ReceiptService
    this.receiptService.generateReceipt(this.products, this.total);
    
    // Clear the cart after checkout
    this.cartService.clearCart();
    
    // Update cart view after clearing
    this.updateCart();
  }
}
