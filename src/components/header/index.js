import angular from 'angular';
import HeaderComponent from './header.component';

export default angular
  .module('app.header', [])
  .component('header', HeaderComponent)
  .name;
