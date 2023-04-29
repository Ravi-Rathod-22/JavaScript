//////////////////////////////////////////////////////////////////////////////////////////////////
// Asynchronous JavaScript, AJAX and APIs

/*

SYNCHRONOUS CODE :
    Example : 
        const p = document.querySelector('.p');
        p.textContent = 'My name is Jonas!';
        alert('Text set!');
        p.style.color = 'red';

    - Most Code is Synchronous in JavaScript
    - Synchronous code is executed line by line
        In the exact order of execution that we defined in our code
        Just like in Above Example.
        So As the first line of code is reached in the execution
        It is simply executed in the execution of thread.
        And same happens with other line of code.
    - Each line of code waits for previous line to finish
        Now this can create problems when one line of code takes a long time to run.
        For example, in above code 
        we have alert statement
        This alert window will block the code execution
    - Long-running operations block code execution.

    'THAT WERE ASYNCHRONOUS CODE COME INTO PLAY'

ASYNCHRONOUS CODE :
    Example :
        const p = document.querySelector('.p');
        setTimeout(function () {
            p.textContent = 'My name is Ravi!';
        },1000);
        p.style.color = 'red';

    - Asynchronous code is executed after a task that runs in the “background” finishes;
    - Asynchronous code is non-blocking;
    - Execution doesn’t wait for an asynchronous task to finish its work;
    - Callback functions alone do NOT make code asynchronous!

AJAX : 
    Asynchronous JavaScript and XML : 
        Allow us to communicate with remote web servers in an asynchronous way.
        With AJAX calls we can request data from web server dynamically.

API :
    Application Programming Interface : Piece of software that can be used by another piece of software,
                                        in order to allow application to talk to each other.
                                    
*/


'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////////////////////////////////////////
// First AJAX Call_ XMLHttpRequest

/*

function renderCountry(data) {
    const html = `
    <article class="country">
        <img class="country__img" src="${data.flags.svg}" />
        <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(data.population / 1000000).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${data.languages.hin }</p>
        </div>
        </article>`;
            // <p class="country__row"><span>💰</span>${data.currencies.INR.name}</p>
            
            countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
}

function getCountryData(country){
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/${country}`)
    request.send();
    
    request.addEventListener('load', function () {
        const [data] = JSON.parse(this.responseText);
        
        renderCountry(data);
    });
}

getCountryData('bharat');

*/

///////////////////////////////////////////////////////////////////////////
//  Welcome to Callback Hell

// function renderCountry(data, className = '') {
//     const html = `
//     <article class="country ${className}">
//         <img class="country__img" src="${data.flags.svg}" />
//         <div class="country__data">
//         <h3 class="country__name">${data.name.common}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${(data.population / 1000000).toFixed(1)} people</p>
//         <p class="country__row"><span>🗣️</span>${data.languages.hin }</p>
//         </div>
//         </article>`;
//             // <p class="country__row"><span>💰</span>${data.currencies.INR.name}</p>
            
//             countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
// }

// const getCountryAndNeighbour = function(country){
    
//     // AJAX Call country 1
    
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.com/v3.1/name/${country}`)
//     request.send();
    
//     request.addEventListener('load', function () {
//         const [data1] = JSON.parse(this.responseText);
        
//         // Render country 1
//         renderCountry(data1);
        
//         // Get neighbours country (2)
        
//         const [neighbour] = data1.borders;
        
//         if (!neighbour) return;
        
//         // AJAX Call country 2  
            
//         const request2 = new XMLHttpRequest();
//         request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`)
//         request2.send();
        
//         request2.addEventListener('load', function() {
//             const [data2] = JSON.parse(this.responseText);
            
//             renderCountry(data2, 'neighbour')
//         })
//     });
// }

// getCountryAndNeighbour('bharat');


// setTimeout(() => {
//     console.log('1 second passed');
//     setTimeout(() => {
//         console.log('2 second passed');
//         setTimeout(() => {
//             console.log('3 second passed');
//             setTimeout(() => {
//                 console.log('4 second passed');
//             },1000)
//         },1000)
//     },1000)
// },1000)


///////////////////////////////////////////////////////////////////////////
// Promises and the Fetch API

const request = fetch(`https://restcountries.com/v3.1/name/bharat`);
console.log(request)

/*
    What is Promises ? 
        - An Object that is used as a placeholder for the future 
            result of an asynchronous operation.
                        |
                        | OR
                        |
        - A container for an asynchronously delivered value.
                        |
                        | OR
                        |
        - A container for a future value.
        
    EXAMPLE : LOTTERY TICKET => PROMISE that i receive money 
                                if i guess correct outcome.
                                
            1. I Buy lottery ticket (promise) right now.
            2. Lottery draw happen asynchronously
            3. If correct outcome, I receive money, because it was promised
            
    => We no longer need to rely on events and callbacks passed into 
        asynchronous functions to handle asynchronous results.
        
    => Instead of nesting callbacks, we can chain promises for a
        sequence of asynchronous operations: escaping callback hell
        
    # PROMISE LIFECYCLE : 
                                    |===>  FULFILLED
        PENDING -----> SETTLED -----|
                                    |===>  REJECTED
                                    
        1. Pending : Before the value is available
        2. Settled : Asynchronous task has finished
        3. Fulfilled : Success! The value is now available
        4. Rejected : An error happened
        
        => Above all the state we can manage by CONSUMING PROMISE 
            but for consuming promise we have to BUILD PROMISE.
            
            fetch function build promise by them self
    
*/
