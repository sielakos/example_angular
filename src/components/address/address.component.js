export default {
  template: `
    <div class="address">
      <div class="address__name">{{$ctrl.address.firstName}} {{$ctrl.address.lastName}}</div>
      <div class="address__email">{{$ctrl.address.email}}</div>
      <div class="address__country">{{$ctrl.address.country}}</div>
      <a class="address__edit" ui-sref="main.edit({id: $ctrl.address.id})">edit</a>
    </div>
  `,
  bindings: {
    address: '<'
  }
};