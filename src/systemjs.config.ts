declare var System: any;

(function (global) {
    System.config({
        packages: {'app': {defaultExtension: 'js'}}
    });
    System.import('app/main')
        .then(null, console.error.bind(console));
})(this);
