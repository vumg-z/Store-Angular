// este es el bueno 

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs";
 

@Injectable ({
    providedIn: 'root'
})
export class ProductCatalogService {
    constructor(private http:HttpClient){}
}

//metodo para obtener datos
getProducts():Observable<any> {
    return this.http ('/assets/products.xml'
        //maping
    )
}

private parseXML(data:String){
    const parser = new DOMParser();
    const xml = parser.parseFromString(data,'text/xml')
    const products.map(products => {
        return { id:products.getElementsByTagName('product')
            name: "" "price" // iguess this is for parsing, pls complete
        }
    }
    )
}

