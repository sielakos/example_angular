import angular from 'angular';
import uiRouter from 'angular-ui-router';
import addressList from '../address-list';
import addressForm from '../address-form';
import EditAddressComponent from './edit-address.component';

export default angular
  .module('app-edit-address', [
    uiRouter,
    addressList,
    addressForm
  ])
  .component('editAddress', EditAddressComponent)
  .config(($stateProvider) => {
    $stateProvider.state('main.edit', {
      url: '/edit/:id',
      component: 'editAddress',
      resolve: {
        address: ($stateParams, addressList) => addressList.getAddress($stateParams.id)
      }
    });
  })
  .name;