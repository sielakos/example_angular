import pipe from '../../common/pipe.helper';

let defaultAddresses = [
  {
    firstName: 'Alan',
    lastName: 'Smith',
    email: 'alan.smith@smith.oryt',
    country: 'Poland'
  },
  {
    firstName: 'Alina',
    lastName: 'Smith',
    email: 'alina.smith@smith.oryt',
    country: 'Poland'
  },
  {
    firstName: 'Bartosz',
    lastName: 'Kowalski',
    email: 'bartosz.kowalski@kowalski.hyet',
    country: 'Poland'
  },
  {
    firstName: 'Karolina',
    lastName: 'Kowalska',
    email: 'karolina.kowalska@kowalski.hyet',
    country: 'Poland'
  }
];


export default ($window) => {
  const key = 'address-book';
  const localStorage = $window.localStorage;
  const getAddresses = pipe(
    () => key,
    localStorage.getItem.bind(localStorage),
    JSON.parse
  );

  ensureAddressBookIsntEmpty();

  return {
    getAddresses
  };

  function ensureAddressBookIsntEmpty() {
    if (localStorage.getItem(key) === null) {
      pipe(
        JSON.stringify,
        localStorage.setItem.bind(localStorage, key)
      )(defaultAddresses);
    }
  }
};