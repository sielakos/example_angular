import angular from 'angular';
import uiRouter from 'angular-ui-router';
import './app.scss';
import AppComponent from './app.component';
import components from './components';

angular
  .module('app', [
    uiRouter,
    components
  ])
  .component('app', AppComponent)
  .config(/* @ngInject */ ($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('main', {
        url: '/',
        component: 'app'
      });

    $urlRouterProvider.otherwise('/');
  });