/// <reference path="products.json.d.ts" />
System.register(['@angular/core', '@angular/common', '@angular/http', 'angular2-datatable/datatable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, http_1, datatable_1;
    var Products;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (datatable_1_1) {
                datatable_1 = datatable_1_1;
            }],
        execute: function() {
            Products = (function () {
                function Products(http) {
                    var _this = this;
                    this.http = http;
                    this.getProducts(function (productsObject) {
                        _this.data = productsObject.products.product[1];
                    });
                }
                Products.prototype.getProducts = function (callback) {
                    this.http.get('app/products.json')
                        .subscribe(function (data) {
                        callback(data.json());
                    });
                };
                ;
                Products = __decorate([
                    core_1.Component({
                        selector: 'app',
                        templateUrl: 'app/products.html',
                        providers: [http_1.HTTP_PROVIDERS],
                        directives: [datatable_1.DataTableDirectives],
                        pipes: [common_1.DatePipe]
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], Products);
                return Products;
            }());
            exports_1("Products", Products);
        }
    }
});

//# sourceMappingURL=products.component.js.map
