import { Component, inject } from '@angular/core';
import { ProductsService } from '../data/services/products.service';
import { Product } from '../data/interfaces/product.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-list',
  standalone: false,
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
  productsService = inject(ProductsService)
  router = inject(Router)

  products: Product[] = []

  constructor() {
    this.loadProducts()
  }

  details(id: Number) {
    this.router.navigate(['details', id])
  }

  updateProduct(id: Number) {
    this.router.navigate(['update', id])
  }

  deleteProduct(id: Number) {
    this.productsService.deleteProductById(id)
    .subscribe(() => {
      this.loadProducts()
    })
  }

  loadProducts() {
    this.productsService.getAllProducts()
    .subscribe(val => {
      this.products = val
    })
  }

  toAddProduct() {
    this.router.navigate(['add'])
  }
}
