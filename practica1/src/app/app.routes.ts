import { Routes } from '@angular/router';
import { ShoppingCartComponent } from '../components/ShoppingCartComponent';
import { ProductCatalogComponent } from '../components/ProductCatalog';

export const routes: Routes = [
  { path: '', component: ProductCatalogComponent }, 
  { path: 'cart', component: ShoppingCartComponent } 
];
