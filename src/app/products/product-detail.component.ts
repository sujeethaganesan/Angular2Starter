import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../products/product.service'
import { IProduct } from './product';

@Component({
    moduleId:module.id,
    templateUrl: './product-detail.component.html'
})

export class ProductDetailComponent implements OnInit{
  pageTitle:string="In Stock";
  product:IProduct;
  errorMessage:string;
  constructor(private _productService:ProductService, private _route:ActivatedRoute, private _router:Router)
  {
  }
  ngOnInit():void{
      let id= +this._route.snapshot.params['id'];
      this.pageTitle +=`:${id}`;
      this._productService.getProduct(id).subscribe((product)=>this.product=product);
  }
  onBack():void
  {
    this._router.navigate(['/product']);
  }
}