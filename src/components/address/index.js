import angular from 'angular';
import AddressComponent from './address.component';

export default angular
  .module('app-address', [])
  .component('address', AddressComponent)
  .name;