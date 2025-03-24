import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { ProductsService } from './data/services/products.service';
import { firstValueFrom } from 'rxjs';

export const authGuard: CanActivateFn = async (route, state) => {
  const token = localStorage.getItem("token")

  if (token == null){
    return false
  }

  const service = inject(ProductsService)
  let activeToken: boolean = false

  let res = await firstValueFrom(service.getAllProducts())

  if (res.url == "http://localhost:8080/api/products"){
    return true;
  }

  return false;
};
