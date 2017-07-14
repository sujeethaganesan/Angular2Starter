import { Component } from '@angular/core';
import {ProductService} from './products/product.service'

@Component({
    selector: 'pm-app',
    template: `
        <div>
        <div class="navbar navbar-default">
        <a class="navbar-brand">{{pageTitle}}</a>
        <div class="container-fluid">
        <ul class="nav navbar-nav">
        <li><a [routerLink]="['/welcome']">Home</a></li>
        <li><a [routerLink]="['/product']">Products</a></li>
        <li><a [routerLink]="['/faq']">FAQ</a></li>
        </ul>
        </div>
        </div>
        <div class="container">
        <router-outlet></router-outlet>
        </div>
        </div>`
})
export class AppComponent {
    pageTitle:string="Fish Management";
    
 }
