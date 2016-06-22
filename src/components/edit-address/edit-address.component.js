class EditAddressController {
  constructor($state, addressList) {
    this.$state = $state;
    this.addressList = addressList;
  }

  onEdit(address) {
    this.addressList.editAddress(address);
    this.$state.go('main.list');
  }

  onDelete(addressId) {
    this.addressList.deleteAddress(addressId);
    this.$state.go('main.list');
  }
}

export default {
  template: `
    <address-form on-save="$ctrl.onEdit(address)" address="$ctrl.address">
      <button type="button" ng-click="$ctrl.onDelete($ctrl.address.id)">Delete</button>
    </address-form>
  `,
  bindings: {
    address: '<'
  },
  controller: EditAddressController
};