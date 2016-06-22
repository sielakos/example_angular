import angular from 'angular';
import ngMessages from 'angular-messages';
import FieldErrorsComponent from './field-errors.component';

export default angular
  .module('app-field-errors', [
    ngMessages
  ])
  .component('fieldErrors', FieldErrorsComponent)
  .name;