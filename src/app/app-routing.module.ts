import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { DetailsCardComponent } from './details-card/details-card.component';
import { AddFormComponent } from './add-form/add-form.component';
import { UpdateFormComponent } from './update-form/update-form.component';

const routes: Routes = [
  {path: '', component: ProductsListComponent},
  {path: 'details/:id', component: DetailsCardComponent},
  {path: 'add', component: AddFormComponent},
  {path: 'update/:id', component: UpdateFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
