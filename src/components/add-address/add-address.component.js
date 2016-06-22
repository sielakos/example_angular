class AddAddressController {
  constructor($state, addressList) {
    this.addressList = addressList;
    this.$state = $state;
  }
  
  onSave(address) {
    this.addressList.addAddress(address);
    this.$state.go('main.list', {filter: ''});
  }
}

export default {
  template: `<address-form on-save="$ctrl.onSave(address)"></address-form>`,
  controller: AddAddressController
};