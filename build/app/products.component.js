System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var Products;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Products = (function () {
                function Products() {
                }
                Products = __decorate([
                    core_1.Component({
                        selector: 'app',
                        templateUrl: 'app/products.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], Products);
                return Products;
            }());
            exports_1("Products", Products);
        }
    }
});
// App.controller('TodoCtrl', function ($scope, $http) {
//     $http.get('products.json')
//         .then(function (res) {
//             $scope.todos = res.data;
//         });
// });
// @Component({
//     selector: 'my-component',
//     template: '<div>Hello my name is {{name}}. <button (click)="sayMyName()">Say my name</button></div>'
// })
// export class MyComponent {
//     constructor() {
//         this.name = 'Max'
//     }
//     sayMyName() {
//         console.log('My name is', this.name)
//     }
// }

//# sourceMappingURL=products.component.js.map
