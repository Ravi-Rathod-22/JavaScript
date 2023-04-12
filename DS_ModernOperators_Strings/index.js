'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return[this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },

  orderDelivery: function ({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta : function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza : function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  }
};


// /////////////////////////////////////////////////////////////////////////////////////////////////////
// // DESTRUCTURING ARRAYS

//   /* Destructuring of arrays is use for assign element in separate variable with short
//      hand
//   */

//   const arr = [2, 3, 4];
//   const a = arr[0];
//   const b = arr[1];
//   const c = arr[2];

//   const [x, y, z] = arr;
//   console.log(x, y, z);
//   console.log(arr);

//   /* Skip this element by putting hole example is give below */
//   let [main, , secondary] = restaurant.categories;
//   console.log(main, secondary);

//   /* If we want to change value of two variable or change two element position with  
//      each other then we can use destructuring 
//   */

//   // const temp = main;
//   // main = secondary;
//   // secondary = temp;

//   [main, secondary] = [secondary, main]
//   console.log(main, secondary);

//   /* Receive 2 return value from function */
//   const [starterCourse, mainCourse] = restaurant.order(2, 0);
//   console.log(starterCourse, mainCourse);

//   /* Nested Destructuring */

//   const nested = [2,3, [5,6]];

//   // const [i, ,j] = nested
//   // console.log(i, j);

//   const [i, , [j, k]] = nested
//   console.log(i, j, k);

//   /* Default Value */
//   const [p = 1, q = 1, r =1] = [8, 9]
//   console.log(p, q, r);



// /////////////////////////////////////////////////////////////////////////////////////////////////////
// // DESTRUCTURING OBJECT

//   /* Object Destructuring is assigning values of keys into other variable
//      In Object Destructuring variable  is same as object key
//   */

//      const { name, openingHours, categories } = restaurant;
//      console.log(name, openingHours, categories);
   
//      /* We can give other name also and example of that is given below */
   
//      const { name: restaurantName, openingHours: hours, categories: tag } = restaurant;
//      console.log(restaurantName, hours, tag);
   
//      /* Default Value */
   
//      const { menu = [], starterMenu: starter = [] } = restaurant
//      console.log(menu, starter); 
   
//      /* Mutating Variable */
   
//      let a = 111;
//      let b = 222;
//      let obj = { a:23, b:7 , c:14 };
//      ({a, b} = obj);
//      console.log(a, b);
   
//      /* Nested Object */
   
//      const { fri : {open, close} } = openingHours;
//      console.log(open, close);
   
//      /* Use of function */
//      restaurant.orderDelivery({
//        time: '22:30',
//        address: 'BVN is peace',
//        mainIndex: 2,
//        starterIndex: 2,
//      })
   
//      restaurant.orderDelivery({
//        address: 'Ahmi is lob',
//        starterIndex: 1,
//      })



// /////////////////////////////////////////////////////////////////////////////////////////////////////
// // THE SPREAD OPERATOR(...)

//   /* Expand Array into all it's element */
//   /* Unpack All Element of Array  */

//     /* Example */
//     const spreadArr = [7, 8, 9];
//     const badNewArr = [1, 2, spreadArr[0], spreadArr[1], spreadArr[2]];
//     console.log(badNewArr);

//     const newArr = [1, 2, ...spreadArr];
//     console.log(newArr);

//     console.log(...newArr);
//     console.log(1, 2, 7, 8, 9);

//   /* Add New Element with existing array and create new array*/
//     const newMenu = [...restaurant.mainMenu, 'Punjabi'];
//     console.log(newMenu);

//   /* Merge Two Array */

//     //Copy Array
//     const mainMenuCopy = [...restaurant.mainMenu];

//     //Join 2 Arrays
//     const spreadMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
//     console.log(spreadMenu);

//   /* NOTE : Spread Operator Only use in JS Iterables
//             Iterables : arrays, strings, maps, set. Not Objects      
//   */

 
//   /* We can't use this to build a string using a template literal 
//       Because in template literal we can't use multiple value separated by comma.
//       In shot In template literal spread operator not use.
//       ONLY USE WHEN WE PASS ARGUMENTS IN FUNCTION FUNCTION or Build NEW ARRAY.
//   */

//     const firstName = 'Ravi';
//     console.log(...firstName, '', 'R.'); 
//     // console.log(`${...firstName} Rathod`);

//   /* Using Function*/
//     const ingredients = [
//       // prompt("Let's make pasta! Ingredient 1?"),
//       // prompt('Ingredient 2?'),
//       // prompt('Ingredient 3')
//     ]

//     console.log(ingredients);

//     restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
//     restaurant.orderPasta(...ingredients);

//   /* Object */
//     const newRestaurant = {foundedIn: 2000, ...restaurant, founderName: 'Ravi Rathod' }
//     console.log(newRestaurant);

//     const restaurantCopy = {...newRestaurant};
//     restaurantCopy.name = 'Satnam';
//     console.log(restaurantCopy, restaurant);


// /////////////////////////////////////////////////////////////////////////////////////////////////////
// // SHORT CIRCUITING [&& and ||]

//     /* We can do short circuiting using  AND / OR operator 
//         This operator use any data type, return any data type 
//         and this called is short circuiting 
//     */

//       //////////////////// OR /////////////////////////////

//       /* In OR Operator it check all element and find truthy value
//          if there is anyone then it will return that 
//          or if there no one then return last element 
//       */


//          console.log( 3 || 'Ravi' );
//          console.log( '' || 'Ravi' );
//          console.log( true || 0 );
//          console.log( undefined || null );
 
//          console.log( undefined || 0 || 'Hello' || 23 || null );
 
 
//          // EXAMPLE 
 
//          // restaurant.numGuests = 23;
//          const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
//          console.log(guest1);
 
//          const guest2 = restaurant.numGuests || 10;
//          console.log(guest2);
 
//          //////////////////// END //////////////////////////
 
//          /* In END Operator it check all element and if all value is truthy 
//              return last element.
//              If from all element if just one value is falsy then it will return that.
//          */
 
//          console.log( 0 && 'Ravi' );
//          console.log( 7 && 'Ravi' );
 
//          console.log('Hello' && 23 && null && 'RAVI');
 
//          // Practical example
//          if (restaurant.orderPizza) {
//            restaurant.orderPizza('mushrooms', 'spinach');
//          }
 
//          restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach')





         
// /////////////////////////////////////////////////////////////////////////////////////////////////////
// // The NULLISH COALESCING OPERATOR (??)

//     restaurant.numGuests = 0;
//     const guest = restaurant.numGuests || 10;
//     console.log(guest);

//     // Output : 10

//     //Nullish : null and undefine
//     const guestCorrect = restaurant.numGuests || 10;
//     console.log(guestCorrect);

//     //Output : 0



    
    
// /////////////////////////////////////////////////////////////////////////////////////////////////////
// // LOOPING ARRAYS_ THE FOR-OF LOOP

//   const restaurantMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
//   console.log(restaurantMenu);

//   for (const items of restaurantMenu) console.log(items);

//   for (const [index,items] of restaurantMenu.entries()) {
//     console.log(`${index + 1}: ${items}`);
//   }




// /////////////////////////////////////////////////////////////////////////////////////////////////////
// // ENHANCED OBJECT LITERALS


// const resOpeningHours = {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// }
// // Data needed for first part of the section
// const restaurant1 = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   resOpeningHours ,

//   order (starterIndex, mainIndex) {
//     return[this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
//   },

//   orderDelivery ({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
//     console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
//   },

//   orderPasta  (ing1, ing2, ing3) {
//     console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
//   },

//   orderPizza  (mainIngredient, ...otherIngredient) {
//     console.log(mainIngredient);
//     console.log(otherIngredient);
//   }
// };

// console.log('Lllllllllllllllllllllll', restaurant1);





// /////////////////////////////////////////////////////////////////////////////////////////////////////
// // OPTIONAL CHAINING (?.)

//   /* This is introduce in ES2020 */

//   if (restaurant.openingHours && restaurant.openingHours.mon)
//     console.log(restaurant.openingHours.mon.open);
    
  
//   // WITH optional chaining
//   console.log(restaurant.openingHours.mon?.open);

//   /* Methods */
//   console.log(restaurant.order?.(1, 0) ?? `Method does not exits`);
//   console.log(restaurant.orderRisotto?.(1, 0) ?? `Method does not exits`);

//   const user = [{name: 'Ravi', email: 'ravi@gamil.com'}];
//   console.log(user[0]?.name ?? 'User array empty');





// /////////////////////////////////////////////////////////////////////////////////////////////////////
// // SETS

//   /* Sets is a Data Structure.
//       That is introduce in ES6 version.
//       Sets are also available in other languages.
      
//       SETS IS NOTHING BUT A COLLECTION OF UNIQUE VALUES.
//   */
  
//       // SETS Syntax is something like given below 
//       // In which after "new Set" we to pass iterable 
//       // like array, string and other who are iterable in javascript
      
//         const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
//         console.log(ordersSet);
    
//         console.log(new Set('Ravi'));
        
//         // Check How many elements are in the sets
//         console.log(ordersSet.size);
        
//         // "has" method check if particular elements are in the sets or not 
//         console.log(ordersSet.has('Pizza'));
//         console.log(ordersSet.has('Bread'));
        
//         // Add and Delete elements
//         ordersSet.add('Garlic Bread');
//         ordersSet.add('Garlic Bread');
//         ordersSet.delete('Risotto');
//         console.log(ordersSet);
        
//         // In Sets we can't retrieve the elements
//         console.log(ordersSet[0]);  /* =>  Output : undefined */
        
//         // remove all elements using "clear" method
//         /* ordersSet.clear();
//           console.log(ordersSet); 
//         */
       
//         // Looping Sets
//         for (const order of ordersSet) console.log(order); 
        
        
//         /* EXAMPLE */
//         const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
//         const uniqueStaff = new Set(staff);
//         console.log(uniqueStaff);
//         const convertSetToArray = [...uniqueStaff]; // Because spread operator work on every iterable in JS 
//         console.log(convertSetToArray);             // and here sets is also iterable
    
      




// /////////////////////////////////////////////////////////////////////////////////////////////////////
// // MAPS FUNDAMENTALS

//     /* Maps is a Data Structure.
//         That is introduce in ES6 version.
//         Maps are also available in other languages.
        
//         Maps use for map value to keys.
//         Just like an object data is stored in key value pairs in maps.
        
//         But Big Difference between Object and Keys is : 
//           1. In maps keys can be any type and this can be huge.
//           2. In Object keys are always strings.
//     */
   
//           // Example : 
//           const rest =  new Map();
//           rest.set('name', 'Satnam');
//           rest.set(1, 'Bhavnagar, India');
//           rest.set(2, 'Ahemdabad, India');
          
//           /*We can set key value pair as below also */
          
//           rest
//             .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//             .set('open', 11)
//             .set('close', 23)
//             .set(true, 'We are open :D')
//             .set(false, 'We are closed :(')
          
            
//             /* Get Value From Maps */
//             console.log(rest.get('name'));
//             console.log(rest.get(true));
//             console.log(rest.get(1));
            
//             //Example : 
//             const time = 21;
//             console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
            
            
//             /* Some Other methods in maps */
//             console.log(rest.has('categories'));
//             rest.delete(2);
//             // rest.clear();
            
//             console.log(rest);
//             console.log(rest.size);
            
            // /************ MAPS ITERATIONS ************/
            
            // const question = new Map([ 
            //   ['question', 'What is the best programming language in the world ?'],
            //   [1, 'C'],
            //   [2, 'Java'],
            //   [3, 'JavaScript'],
            //   ['correct', 3],
            //   [true, 'Correct'],
            //   [false, 'Try again']
            // ]);

            // console.log(question);

            // // Convert Object to Map
            // console.log(Object.entries(restaurant.openingHours));
            // const hoursMap = new Map(Object.entries(restaurant.openingHours));
            // console.log(hoursMap);

            // for (const [key, value] of question) {
            //   if (typeof key === 'number') 
            //     console.log(key, value);
            // }

