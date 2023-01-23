import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { TokenInterceptorService } from './interceptor/token-interceptor.service';
import { ProductListComponent } from './user/product-list/product-list.component';
import { CacheInterceptorService } from './interceptor/cache-interceptor.service';
import { ProductByCategoryComponent } from './user/product-by-category/product-by-category.component';
import { SearchProductComponent } from './user/search-product/search-product.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ProductListComponent,
    ProductByCategoryComponent,
    SearchProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [{
    useClass: TokenInterceptorService,
    provide: HTTP_INTERCEPTORS,
    multi: true
  },{
    useClass: CacheInterceptorService,
    provide: HTTP_INTERCEPTORS,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
