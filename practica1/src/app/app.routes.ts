import { Routes } from '@angular/router';
import { ShoppingCartComponent } from '../components/Carrito';
import { ProductCatalogComponent } from '../components/ProductCatalog';

export const routes: Routes = [
  { path: '', component: ProductCatalogComponent }, // Default route
  { path: 'cart', component: ShoppingCartComponent } // Route for the shopping cart
];
