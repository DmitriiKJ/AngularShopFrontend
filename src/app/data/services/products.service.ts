import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  http = inject(HttpClient)

  baseApiUrl = "http://localhost:8080/api/products"

  constructor() { }

  getAllProducts() {
    return this.http.get<Product[]>(`${this.baseApiUrl}`, {headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    },
    observe: 'response'})
  }

  getProductById(id: Number) {
    return this.http.get<Product>(`${this.baseApiUrl}/${id}`, {headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }})
  }

  addProduct(product: Product) {
    return this.http.post<Product>(`${this.baseApiUrl}`, product, {headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }})
  }

  updateProduct(product: Product) {
    return this.http.put<Product>(`${this.baseApiUrl}`, product, {headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }})
  }

  deleteProductById(id: Number) {
    return this.http.delete<Number>(`${this.baseApiUrl}/${id}`, {headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }})
  }
}
