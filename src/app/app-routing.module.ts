import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PraticComponent } from './pratic/pratic.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [

  {
    path: 'Pratic',
    component: PraticComponent
  },
  {
    path: 'Product',
    component: ProductComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
