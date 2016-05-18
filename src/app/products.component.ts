import {Component} from 'angular2/core';

@Component({
    selector: 'app',
    templateUrl: 'app/products.html'
})
export class Products {

}

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
