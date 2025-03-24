import { Component, inject } from '@angular/core';
import { ProductsService } from '../data/services/products.service';
import { Router } from '@angular/router';
import { Product } from '../data/interfaces/product.interface';

@Component({
  selector: 'app-add-form',
  standalone: false,
  templateUrl: './add-form.component.html',
  styleUrl: './add-form.component.css'
})
export class AddFormComponent {
  poductsService = inject(ProductsService)
  router = inject(Router)
  productToAdd: Product
  error: String = ""

  constructor() {
    this.productToAdd = {id: 0, name: "", description: "", price: 0, stock: 0}
  }

  createProduct(event: Event) {
    event.preventDefault()

    if (this.productToAdd.name.length <= 2) {
      this.error = "Name length must be more or equal 2"
    }
    else if (this.productToAdd.price <= 0) {
      this.error = "Price must be more then 0"
    }
    else {
      this.poductsService.addProduct(this.productToAdd!)
      .subscribe(() => {
        this.router.navigate([''])
      })
    }
  }
}
