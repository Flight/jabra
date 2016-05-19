(function (global) {
    // map tells the System loader where to look for things
    var map = {
        'src': 'build',
        'rxjs': 'node_modules/rxjs',
        '@angular': 'node_modules/@angular',
        'angular2-datatable': 'node_modules/angular2-datatable',
        'lodash': 'node_modules/lodash/lodash.js'
    };
    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app': { defaultExtension: 'js' },
        'src': { main: 'main.js', defaultExtension: 'js' },
        'rxjs': { defaultExtension: 'js' },
        'angular2-datatable': { defaultExtension: 'js' },
        'lodash': { defaultExtension: 'js' },
    };
    var packageNames = [
        '@angular/common',
        '@angular/compiler',
        '@angular/core',
        '@angular/http',
        '@angular/platform-browser',
        '@angular/platform-browser-dynamic',
        '@angular/router'
    ];
    // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
    packageNames.forEach(function (pkgName) {
        packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
    });
    var config = {
        map: map,
        packages: packages
    };
    // filterSystemConfig - index.html's chance to modify config before we register it.
    if (global.filterSystemConfig) {
        global.filterSystemConfig(config);
    }
    System.config(config);
    System.import('app/main')
        .then(null, console.error.bind(console));
})(this);

//# sourceMappingURL=systemjs.config.js.map
