/**
 * Address list component, simply displays list of components
 */
export default {
  template: `
    <ul class="address-list">
      <li ng-repeat="address in $ctrl.addresses">
        <address address="address"></address>
      </li>
    </ul>
  `,
  bindings: {
    addresses: '<'
  }
};