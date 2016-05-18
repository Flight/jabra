/// <reference path="../../node_modules/typescript/lib/lib.es6.d.ts" />

import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {LocationStrategy, HashLocationStrategy} from 'angular2/platform/common';
import {Products} from './products.component';
import {provide} from 'angular2/core';
// import {DataTableDirectives} from 'angular2-datatable/datatable';

bootstrap(Products, [
    ROUTER_PROVIDERS,
    provide(LocationStrategy, { useClass: HashLocationStrategy })
]);