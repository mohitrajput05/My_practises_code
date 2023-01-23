import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-search-product',
  templateUrl: '../product-list/product-list.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {
  productList?:Product[];
  constructor(private productService:ProductService,private router:Router,private activatedRouter:ActivatedRoute) { }

  ngOnInit(): void {
      this.router.events.subscribe(event=>{
        if(event instanceof NavigationEnd){
          let searchText = ''+this.activatedRouter.snapshot.paramMap.get('text');
          this.productService.searchProduct(searchText)
          .subscribe(data=>{
             this.productList = data;
          },err=>{

          })
        }
      })
  }

}
