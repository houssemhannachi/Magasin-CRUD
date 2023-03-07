import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../_models/Product";

const API_URL = '/server/api/';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) {
  }

  getAllProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(API_URL + "getAllProducts");
  }

  createProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(API_URL + "addProduct", product).pipe();
  }

  deleteProductById(id: number | undefined): Observable<string> {
    return this.httpClient.delete<string>(API_URL + `deleteProduct/${id}`);
  }

  getProductById(id: number | undefined): Observable<Product> {
    return this.httpClient.get<Product>(API_URL + `getProductById/${id}`)
  }

  updateProduct(product: Product): Observable<Product> {
    return this.httpClient.put<Product>(API_URL + "editProduct", product);
  }

  getProductsByCategory(categoryId: number): Observable<Product[]> {
    return this.httpClient.get<Product[]>(API_URL + `getProductsByIdCategory/${categoryId}`);
  }
}
