import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList:Product[]|any;
  constructor(private toaster:ToastrService,private _productService:ProductService) { }

  ngOnInit(): void {
    this._productService.getProductList()
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
}
