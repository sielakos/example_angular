import validator from 'validator';

/**
 * Directive that adds email validator to ngModel.
 * As per requirements email input has to have type="text" so custom validator is needed.
 */
export default () => ({
  restrict: 'A',
  require: 'ngModel',
  link: (scope, element, attrs, ngModel) => {
    ngModel.$validators.email = (modelValue, viewValue) => {
      const value = modelValue || viewValue;

      return validator.isEmail(value);
    }
  }
});