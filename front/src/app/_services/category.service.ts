import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../_models/Category";
import {Product} from "../_models/Product";

const API = '/server/api/';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) {
  }

  getAllCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(API + "getAllCategories");
  }

  addCategory(category: Category): Observable<Category> {
    return this.httpClient.post<Category>(API + "addCategory", category);
  }

  deleteCategoryById(idCategory: number | undefined) {
    return this.httpClient.delete<string>(API + `deleteCategory/${idCategory}`);
  }

  getCategoryById(id: number | undefined): Observable<Category> {
    return this.httpClient.get<Category>(API + `getCategoryById/${id}`)
  }

  updateCategory(category: Category): Observable<Category> {
    return this.httpClient.put<Category>(API + "updateCategory", category);
  }
}
