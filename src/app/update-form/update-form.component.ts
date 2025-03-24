import { Component, inject } from '@angular/core';
import { ProductsService } from '../data/services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../data/interfaces/product.interface';

@Component({
  selector: 'app-update-form',
  standalone: false,
  templateUrl: './update-form.component.html',
  styleUrl: './update-form.component.css'
})
export class UpdateFormComponent {
  id: Number
  poductsService = inject(ProductsService)
  router = inject(Router)
  productToUpdate!: Product
  error: String = ""

  constructor(private route: ActivatedRoute) {
    this.id = Number(this.route.snapshot.paramMap.get('id'))
    this.poductsService.getProductById(this.id)
    .subscribe(prod => {
      this.productToUpdate = prod
    })
  }

  updateProduct(event: Event) {
    event.preventDefault()

    if (this.productToUpdate.name.length <= 2) {
      this.error = "Name length must be more or equal 2"
    }
    else if (this.productToUpdate.price <= 0) {
      this.error = "Price must be more then 0"
    }
    else {
      this.poductsService.updateProduct(this.productToUpdate!)
      .subscribe(() => {
        this.router.navigate(['list'])
      })
    }
  }
}
