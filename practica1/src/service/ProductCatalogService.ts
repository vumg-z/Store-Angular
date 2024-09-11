import { Injectable, Inject, PLATFORM_ID } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ProductCatalogService {
  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: any) {}

  getProducts(): Observable<any> {
    return this.http.get('./assets/products.xml', { responseType: 'text' })
      .pipe(
        map((data) => {
          if (isPlatformBrowser(this.platformId)) {
            return this.parseXML(data);  // Only use DOMParser in the browser
          } else {
            return [];  // Return empty array on server-side rendering
          }
        })
      );
  }

  private parseXML(data: string) {
    const parser = new DOMParser();
    const xml = parser.parseFromString(data, 'text/xml');
    const products = Array.from(xml.getElementsByTagName('product'));

    return products.map(product => {
      return {
        id: product.getElementsByTagName('id')[0]?.textContent || '',
        name: product.getElementsByTagName('name')[0]?.textContent || '',
        price: parseFloat(product.getElementsByTagName('precio')[0]?.textContent || '0'),
        descripcion: product.getElementsByTagName('descripcion')[0]?.textContent || 'desc',
        quantity: 1
      };
    });
  }
}
