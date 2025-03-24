import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../data/interfaces/product.interface';
import { ProductsService } from '../data/services/products.service';

@Component({
  selector: 'app-details-card',
  standalone: false,
  templateUrl: './details-card.component.html',
  styleUrl: './details-card.component.css'
})
export class DetailsCardComponent {
  router = inject(Router)
  productService = inject(ProductsService)
  id!: Number
  product!: Product

  constructor(private route: ActivatedRoute) {
    this.id = Number(this.route.snapshot.paramMap.get('id'))
    this.productService.getProductById(this.id)
    .subscribe(prod => {
      this.product = prod
    });
  }

  toList(event: Event) {
    event.preventDefault()
    this.router.navigate([''])
  }

}
