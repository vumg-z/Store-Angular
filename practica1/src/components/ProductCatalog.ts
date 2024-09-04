import { Component } from '@angular/core';
import { Product } from '../models/Product';
import { CartService } from '../service/CartService';
import { CommonModule } from '@angular/common'; 


@Component({
  selector: 'app-product-catalog',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: '../components_html/product_catalog.html',
  styleUrls: ['../components_css/productcomponent.css']
})
export class ProductCatalogComponent {
  // List of products available in the catalog
  products: Product[] = [
    { id: 1, name: 'Arduino Leonardo', price: 25, descripcion: 'Electronic board', quantity: 1 },
    { id: 2, name: 'TV', price: 150, descripcion: 'LED TV', quantity: 1 },
    { id: 3, name: 'Skateboard', price: 50, descripcion: 'Sports equipment', quantity: 1 }
  ];

  constructor(private cartService: CartService) {}

  addToCart(product: Product) {
    // console.log("si")
    this.cartService.addToCart(product);
  }
}
