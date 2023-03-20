'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


// //////////////////////////////////////////////////////////////////////////////////////////////////
// // Simple Array Methods

// let arr = ['a', 'b', 'c', 'd', 'e'];

// // SLICE

// // In this we have pass two params and both take index of array 
// // and based on that We can get the new array

// // If there is only one argument is pass then we can get new array 
// // which is start from index pass in argument 
// console.log(arr.slice(2));

// // Using minus sign with index work same but with opposite direction of array
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));

// // If there is two argument then new array start with first number 
// // and take in between all element pass at last number
// // First index always lower then second if 2 argument is positive

// console.log(arr.slice(2, 4));
// console.log(arr.slice(1, -2));

// console.log(arr.slice());
// console.log([...arr]);

// // SPLICE

// // Same as slice but there just one difference that 
// // It is mutate actual array 
// // console.log(arr.splice(2));
// console.log(arr.splice(-1));
// console.log(arr);
// console.log(arr.splice(1, 2));
// console.log(arr);

//////////////////////////////////////////////////////////////////////////////////////////////////
// Looping Arrays_ forEach

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements) {
  if (movement > 0) {
    console.log(`You Deposited ${movement}`);
  } else {
    console.log(`You Withdrew ${Math.abs(movement)}`);
  }
}

console.log(`----- FOREACH -----`);
movements.forEach((movement, i, arr) => {
  // console.log('arr', arr);
  if (movement > 0) {
    console.log(`Movement ${i+1} : You Deposited ${movement}`);
  } else {
    console.log(`Movement ${i+1} : You Withdrew ${Math.abs(movement)}`);
  }
})

//////////////////////////////////////////////////////////////////////////////////////////////////
// forEach With Maps and Sets

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach((value, key) => {
  console.log(`${key} : ${value}`);
})

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach((value, key) => {
  console.log(value, key)
})


//////////////////////////////////////////////////////////////////////////////////////////////////
// Creating DOM Elements

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach((mov, i) => {

    const type = mov > 0 ? 'deposit' : 'withdrawal'

    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type.toLocaleUpperCase()}</div>
          <div class="movements__value">${mov}</div>
        </div>
    `

    containerMovements.insertAdjacentHTML('afterbegin', html)
  })
}

displayMovements(account1.movements);



//////////////////////////////////////////////////////////////////////////////////////////////////
// The map Method

const eurToUsd = 1.1;

const movementsUSD = movements.map((mov) => eurToUsd * mov)

console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const movement of movements) {
  movementsUSDfor.push(movement * eurToUsd);
}
console.log(movementsUSDfor);


const movementsDescriptions = movements.map((mov, i) => {
  return `Movement ${ i + 1 } : You ${ mov > 0 ? `Deposited` : `Withdrew`} ${mov > 0 ? mov : Math.abs(mov) }`
})

console.log(movementsDescriptions);




//////////////////////////////////////////////////////////////////////////////////////////////////
// Computing Usernames

const createUsernames = function (accs) {
  accs.forEach((acc) =>{
    acc.username = acc.owner.toLowerCase().split(' ').map(name => name[0]).join('');
  })
};

createUsernames(accounts);

console.log(accounts);