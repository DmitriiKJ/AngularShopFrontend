import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  http = inject(HttpClient)

  baseApiUrl = "http://localhost:8080/api/products"
  token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTc0MjgwMzQ1MywiZXhwIjoxNzQyODE0MjUzfQ.Z7UdtH4PcDIGgRV08xWXxu6S4GKI5ZcZA7CxC-vsIpQ"

  constructor() { }

  getAllProducts() {
    return this.http.get<Product[]>(`${this.baseApiUrl}`, {headers: {
      Authorization: `Bearer ${this.token}`
    }})
  }

  getProductById(id: Number) {
    return this.http.get<Product>(`${this.baseApiUrl}/${id}`, {headers: {
      Authorization: `Bearer ${this.token}`
    }})
  }

  addProduct(product: Product) {
    return this.http.post<Product>(`${this.baseApiUrl}`, product, {headers: {
      Authorization: `Bearer ${this.token}`
    }})
  }

  updateProduct(product: Product) {
    return this.http.put<Product>(`${this.baseApiUrl}`, product, {headers: {
      Authorization: `Bearer ${this.token}`
    }})
  }

  deleteProductById(id: Number) {
    return this.http.delete<Number>(`${this.baseApiUrl}/${id}`, {headers: {
      Authorization: `Bearer ${this.token}`
    }})
  }
}
