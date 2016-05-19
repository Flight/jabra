/// <reference path="../../node_modules/typescript/lib/lib.es6.d.ts" />

import {bootstrap} from '@angular/platform-browser-dynamic';
import {ROUTER_PROVIDERS} from '@angular/router';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {Products} from './products.component';
import {provide} from '@angular/core';

bootstrap(Products, [
    ROUTER_PROVIDERS,
    provide(LocationStrategy, { useClass: HashLocationStrategy })
]);