import angular from 'angular';
import fieldErrors from '../field-errors';
import AddressFormComponent from './address-form.component';
import validEmail from './valid-email.directive.js';

export default angular
  .module('app-address-form', [
    fieldErrors
  ])
  .component('addressForm', AddressFormComponent)
  .directive('validEmail', validEmail)
  .name;