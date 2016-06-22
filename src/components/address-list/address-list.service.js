import pipe from '../../common/pipe.helper';
import uuid from 'uuid';

let defaultAddresses = [
  {
    id: uuid.v4(),
    firstName: 'Alan',
    lastName: 'Smith',
    email: 'alan.smith@smith.oryt',
    country: 'Germany'
  },
  {
    id: uuid.v4(),
    firstName: 'Alina',
    lastName: 'Smith',
    email: 'alina.smith@smith.oryt',
    country: 'Germany'
  },
  {
    id: uuid.v4(),
    firstName: 'Bartosz',
    lastName: 'Kowalski',
    email: 'bartosz.kowalski@kowalski.hyet',
    country: 'Poland'
  },
  {
    id: uuid.v4(),
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

  const saveAddresses = pipe(
    JSON.stringify,
    localStorage.setItem.bind(localStorage, key)
  );

  const addAddress = pipe(
    (address) => {
      const addresses = getAddresses();

      address.id = uuid.v4();

      return addresses.concat(address);
    },
    saveAddresses
  );

  const editAddress = pipe(
    (address) => {
      return getAddresses()
        .map((other) => other.id === address.id ? address : other);
    },
    saveAddresses
  );

  const deleteAddress = pipe(
    (id) => {
      return getAddresses()
        .filter(({id: otherId}) => otherId !== id);
    },
    saveAddresses
  );

  const getAddress = (id) => {
    return getAddresses()
      .filter(({id: otherId}) => otherId === id)[0];
  };

  ensureAddressBookIsntEmpty();

  return {
    getAddresses,
    addAddress,
    editAddress,
    deleteAddress,
    getAddress
  };

  function ensureAddressBookIsntEmpty() {
    if (localStorage.getItem(key) === null) {
      saveAddresses(defaultAddresses);
    }
  }
};