/**
 * Created by xie on 2016/5/25.
 */
(function () {
    var map = {
        'angular': 'node_modules/angular',
        'angular-route': 'node_modules/angular-route'
    };
    var packages = {
        'app': {main: 'app.js', defaultExtension: 'js'},
        'angular': {main: 'index.js', defaultExtension: 'js'},
        'angular-route': {main: 'index.js', defaultExtension: 'js'}
    };
    System.config({
        map: map,
        packages: packages
    });


    System.import('app').catch(function (err) {
        console.log(err);
    });
})();