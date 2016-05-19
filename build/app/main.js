/// <reference path="../../node_modules/typescript/lib/lib.es6.d.ts" />
System.register(['@angular/platform-browser-dynamic', '@angular/router', '@angular/common', './products.component', '@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, router_1, common_1, products_component_1, core_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (products_component_1_1) {
                products_component_1 = products_component_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            platform_browser_dynamic_1.bootstrap(products_component_1.Products, [
                router_1.ROUTER_PROVIDERS,
                core_1.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy })
            ]);
        }
    }
});

//# sourceMappingURL=main.js.map
