//Module
import { Component, OnInit} from '@angular/core';
//Service
import { ProductService } from '../products/product.service';
//Interface type
import {IProduct } from './product';


@Component({
    moduleId: module.id,
    templateUrl: './product.list.component.html',
    styleUrls:['./product.list.component.css']
})
export class ProductListComponent implements OnInit{
    pageTitle:string="Product List";
    imageWidth:number=100;
    imageMargin:number=10;
    showImage:boolean=false;
    listFilter:string;
    products:IProduct[];
    errorMessage:string;
    constructor(private _productService:ProductService)
    {
    }
    ngOnInit(){
        this._productService.getProducts()
        .subscribe(
            products => this.products=products,
            error => this.errorMessage= <any>error
        );
    }
    toggleImage():void
    {
        this.showImage=!this.showImage;
    }
    onRatingClicked(message:string):void{
        this.pageTitle="Product List "+message;
    }
}