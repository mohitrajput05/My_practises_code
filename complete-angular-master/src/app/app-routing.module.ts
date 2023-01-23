import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { LoginComponent } from './user/login/login.component';
import { ProductByCategoryComponent } from './user/product-by-category/product-by-category.component';
import { ProductListComponent } from './user/product-list/product-list.component';
import { SearchProductComponent } from './user/search-product/search-product.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children:[
      {
        path: '',
        component: ProductListComponent
      },
      {
        path: 'product-by-category/:id',
        component: ProductByCategoryComponent
      },{
        path: 'search-product/:text',
        component: SearchProductComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
