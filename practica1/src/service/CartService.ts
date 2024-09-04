import { Product } from '../models/Product'; 
import { Injectable } from '@angular/core'; 

@Injectable({ providedIn: 'root' })
export class CartService {
  private items: Product[] = []; 

  addToCart(product: Product) {
    this.items.push(product); 
  }

  removeItem(productId: number) {
    this.items = this.items.filter(item => item.id !== productId); 
  }

  updateItem(product: Product) {
    const index = this.items.findIndex(item => item.id === product.id);
    if (index !== -1) {
      this.items[index] = product; 
    }
  }

  getItem(id: number): Product | undefined {
    return this.items.find(item => item.id === id); 
  }

  getItems(): Product[] {
    return this.items;
  }

  clearCart() {
    this.items = [];
  }

  getTotalPrice(): number {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}
