import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { CartService } from '../service/CartService';
import { ProductCatalogService } from '../service/ProductCatalogService';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Add FormsModule for ngModel


@Component({
  selector: 'app-product-catalog',
  standalone: true,
  imports: [CommonModule, FormsModule], // No need for HttpClientModule anymore
  templateUrl: '../components_html/product_catalog.html',
  styleUrls: ['../components_css/productcomponent.css']
})
export class ProductCatalogComponent implements OnInit {
  products: Product[] = [];
  newPrice: number = 0;
  selectedProduct: Product | null = null;

  constructor(
    private cartService: CartService,
    private productCatalogService: ProductCatalogService // Inject the ProductCatalogService
  ) {}

  // Fetch the products when the component is initialized
  ngOnInit() {
    this.productCatalogService.getProducts().subscribe(data => {
      this.products = data;
      console.log('Products loaded from XML:', this.products);
    });
  }

  // Add to cart method
  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  // Method to open the modal and set the selected product
  openModal(product: Product) {
    this.selectedProduct = product;
    const modal = document.getElementById('priceModal');
    if (modal) {
      modal.classList.remove('hidden');
    }
  }

  // Method to close the modal
  closeModal() {
    const modal = document.getElementById('priceModal');
    if (modal) {
      modal.classList.add('hidden');
    }
    this.newPrice = 0;  // Reset the price input when closing
  }

  // Method to modify the price of the selected product
  modifyProductPrice(id: number, newPrice: number) {
    if (newPrice === undefined || isNaN(newPrice)) {
      console.log('Please provide a valid price');
      return;
    }

    const product = this.products.find(p => p.id === id);
    if (product) {
      product.price = newPrice;
      console.log(`Price of ${product.name} updated to ${product.price}`);
      this.closeModal(); // Close modal after updating price
    } else {
      console.log(`Product with ID ${id} not found`);
    }
  }
}
