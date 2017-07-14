import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate } from '@angular/router';

@Injectable()
export class ProductDetailGuard implements CanActivate {
    constructor(private _router:Router){}
    canActivate(route:ActivatedRouteSnapshot):boolean
    {
    let id =+route.url[1].path;
    if(isNaN(id)|| id<1)
    {
    alert("Invalid Product");
    this._router.navigate(['/product']);
    return false;
    };
    return true;
}

}