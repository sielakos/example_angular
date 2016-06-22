import angular from 'angular';
import uiRouter from 'angular-ui-router';
import addressList from '../address-list';
import addressForm from '../address-form';
import AddAddressComponent from './add-address.component';

export default angular
  .module('app-add-address', [
    uiRouter,
    addressList,
    addressForm
  ])
  .component('addAddress', AddAddressComponent)
  .config(($stateProvider) => {
    $stateProvider.state('main.new', {
      url: '/new',
      component: 'addAddress'
    });
  })
  .name;