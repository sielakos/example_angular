import countryList from 'country-list';

const countries = countryList();

class AddressFormController {
  constructor() {
    this.countries = countries.getNames();
  }

  $onInit() {
    this.address = this.address || {
      firstName: '',
      lastName: '',
      email: '',
      country: ''
    };
  }

  onSubmit() {
    if (this.AddressForm.$valid) {
      this.onSave({address: this.address});
    }
  }
}

export default {
  template: `
    <form name="$ctrl.AddressForm" ng-submit="$ctrl.onSubmit()">
      <div>
        <div>
          <ng-transclude></ng-transclude>
        </div>
        <button type="submit">Save</button>
      </div>
      <div>
        <label>First Name</label>
        <input type="text" 
               ng-model="$ctrl.address.firstName" 
               required 
               name="firstName">
        <field-errors field="$ctrl.AddressForm.firstName"></field-errors>
      </div>
      <div>
        <label>Last Name</label>
        <input type="text" 
               ng-model="$ctrl.address.lastName" 
               required 
               name="lastName">
        <field-errors field="$ctrl.AddressForm.lastName"></field-errors>
      </div>
      <div>
        <label>Email</label>
        <input type="text" 
               ng-model="$ctrl.address.email" 
               valid-email
               required
               name="email">
        <field-errors field="$ctrl.AddressForm.email"></field-errors>
      </div>
      <div>
        <label>Country</label>
        <select ng-model="$ctrl.address.country"
                required 
                name="country"
                ng-options="country for country in $ctrl.countries">
        </select>
        <field-errors field="$ctrl.AddressForm.country"></field-errors>
      </div>
    </form>
  `,
  transclude: true,
  bindings: {
    onSave: '&',
    address: '<?'
  },
  controller: AddressFormController
};