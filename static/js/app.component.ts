import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: './dist/index.html'
})
export class AppComponent implements OnInit {
    ngOnInit() {
        console.log('Application component initialized ...');
    }
}
