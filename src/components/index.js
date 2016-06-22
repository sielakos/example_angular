import angular from 'angular';
import header from './header';
import addressList from './address-list';
import address from './address';
import addressForm from './address-form';
import addAddress from './add-address';
import fieldErrors from './field-errors';

/**
 * Components module groups all components modules used in application, so they can be imported
 * using single components module.
 */
export default angular
  .module('app.components', [
    header,
    addressList,
    address,
    addressForm,
    addAddress,
    fieldErrors
  ])
  .name;