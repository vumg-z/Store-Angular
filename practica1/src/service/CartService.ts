import { Product } from '../models/Product'; 
import { Injectable } from '@angular/core'; 

@Injectable({ providedIn: 'root' })
export class CartService {
  private items: Product[] = []; 

  // Add a product to the cart
  addToCart(product: Product) {
    this.items.push(product); 
  }

  // Remove an item from the cart by its ID
  removeItem(productId: number) {
    this.items = this.items.filter(item => item.id !== productId); 
  }

  // Update an item in the cart
  updateItem(product: Product) {
    const index = this.items.findIndex(item => item.id === product.id);
    if (index !== -1) {
      this.items[index] = product; 
    }
  }

  // Get a specific item by ID
  getItem(id: number): Product | undefined {
    return this.items.find(item => item.id === id); 
  }

  // Get all items in the cart
  getItems(): Product[] {
    return this.items;
  }

  // Clear the cart
  clearCart() {
    this.items = [];
  }

  // Get the total price of all items in the cart
  getTotalPrice(): number {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}
