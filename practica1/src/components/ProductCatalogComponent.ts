// // component 

// import{Componen.OnInit}from'@angular/core'
// import { ProductCatalogService } from '../service/ProductCatalogService'
// @Component({
//     selector:'app-product-catalog'
//     templateUrl:'./product-catalog.component.html'
//     stleYrls:['./']

//     constructor(private productService:ProductCatalogService){}
//     ngOnInit():void{
//         this.productService.getProducts().subscribe((dat)=>
//         this.product = data;
//     )};
//     }
// })

// //metodo modificar metodo

// modifyProductPrice(id;string,newPrice:string){
//     const product = this.products.find(p=>p.id===id);
//     if(product){
//         product.price=newPrice;
//     }
// }

// //Product-catalog.html
// <h2>Catalog</h2>
// <table>
// <thead>
// <tr>
// <th>ID</td>
// <th>Nombre</td>
// <th>Precio</td>
// <th>Acciones</td>
// <hoody>
// <tr *ngFor="let product of products">
// <td>{{ProductCatalogService.id}}</td>
// <td>{{ProductCatalogService.name}}</td>
// <td>{{ProductCatalogService.price}}</td>
// <td>
// <button Click="modifyProductPrice(product.id
// 45.00)">
// ModificarPrecio</button>
// </td>
// </tr>
// </tbody>
// </table>