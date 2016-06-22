export default {
  template: `
    <ng-messages class="field-errors" for="$ctrl.field.$error" ng-hide="$ctrl.field.$valid">
      <ng-message when="required">This field is required</ng-message>
      <ng-message when="email">This field is not valid email</ng-message>
    </ng-messages>
  `,
  bindings: {
    field: '<'
  }
};