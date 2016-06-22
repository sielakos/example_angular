import angular from 'angular';
import uiRouter from 'angular-ui-router';
import addressListService from './address-list.service';
import AddressListComponent from './address-list.component';

export default angular
  .module('app-address-list', [
    uiRouter
  ])
  .factory('addressList', addressListService)
  .component('addressList', AddressListComponent)
  .config(($stateProvider) => {
    $stateProvider.state('main.list', {
      url: '/list',
      component: 'addressList',
      resolve: {
        addresses: (addressList) => addressList.getAddresses()
      }
    })
  })
  .name;