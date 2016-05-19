/// <reference path="products.json.d.ts" />

import {Component} from '@angular/core';
import {DatePipe} from '@angular/common';
import {HTTP_PROVIDERS, Http} from '@angular/http';
import {DataTableDirectives} from 'angular2-datatable/datatable';

@Component({
    selector: 'app',
    templateUrl: 'app/products.html',
    providers: [HTTP_PROVIDERS],
    directives: [DataTableDirectives],
    pipes: [DatePipe]
})

export class Products {
    private data;

    constructor(private http: Http) {
        this.getProducts((productsObject : ProductsNamespace.ProductsObject) => {
            this.data = productsObject.products.product[1];
        });
    }

    getProducts(callback) {
        this.http.get('app/products.json')
            .subscribe((data) => {
                callback(data.json());
            });
    };
}
