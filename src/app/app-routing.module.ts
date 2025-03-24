import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { DetailsCardComponent } from './details-card/details-card.component';
import { AddFormComponent } from './add-form/add-form.component';
import { UpdateFormComponent } from './update-form/update-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { authGuard } from './auth.guard';
import { RegisterFormComponent } from './register-form/register-form.component';

const routes: Routes = [
  {path: '', component: LoginFormComponent},
  {path: 'register', component: RegisterFormComponent},
  {path: 'list', component: ProductsListComponent, canActivate: [authGuard]},
  {path: 'details/:id', component: DetailsCardComponent, canActivate: [authGuard]},
  {path: 'add', component: AddFormComponent, canActivate: [authGuard]},
  {path: 'update/:id', component: UpdateFormComponent, canActivate: [authGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
