import angular from 'angular';
import uiRouter from 'angular-ui-router';
import './app.scss';
import AppComponent from './app.component';
import components from './components';

/**
 * Main application module.
 * It is mainly app component with few configuration options
 */
angular
  .module('app', [
    uiRouter,
    components
  ])
  .component('app', AppComponent)
  .config(($stateProvider, $urlRouterProvider, $locationProvider) => {
    $stateProvider.state('main', {
      abstract: true,
      component: 'app'
    });

    $urlRouterProvider.otherwise('/list');
    $locationProvider.html5Mode(true);
  });