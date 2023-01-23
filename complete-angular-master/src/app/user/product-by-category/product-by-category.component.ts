import { HttpErrorResponse } from '@angular/common/http';
import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-by-category',
  templateUrl: '../product-list/product-list.component.html',
  styleUrls: ['./product-by-category.component.css']
})
export class ProductByCategoryComponent implements OnInit {
  productService?:ProductService;
  productList?:Product[];
  constructor(private router:Router,private toaster:ToastrService,private activatedRouter:ActivatedRoute,private injector:Injector) {
    this.productService = this.injector.get(ProductService);
  }

  ngOnInit(): void {
    this.router.events.subscribe(event=>{
       if(event instanceof NavigationEnd){
        let cid = ''+this.activatedRouter.snapshot.paramMap.get('id');
        this.productService?.getProductOfCategory(cid)
        .subscribe(data=>{
          this.productList = data;
        },err=>{
           if(err instanceof HttpErrorResponse){
             if(err.status == 401)
               this.toaster.error("Unauthorized request","Unauthorized");
             else if(err.status == 500)
              this.toaster.error("Server Error","Error");
           }
        });
       }
    });
  }

}
