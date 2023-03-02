'use strict'
/////////////////////////////////////////////////////////////////////////////////////////////////////
// FUNCTION 
    // Function Declarations

        /*  1) A function declaration used to declare a function with a function keyword. 
                The function declaration must have a function name and it can accept parameters too.
            2) The function in function declaration can be accessed before and after the function definition.
        */  
        function calAge1 (birthYear) {
            return 2037 - birthYear;
        }
        const age1 = calAge1(2000)
        calAge1(age1);


    // Function Expressions

        /*  1) A function Expression is similar to a function declaration without the function name so we can create anonymous function.
            2) Function expressions can be stored in a variable assignment.
            3) Function expressions load and execute only when the program interpreter reaches the line of code.
            4) The function in function expression can be accessed only after the function definition.
        */
        const calAge2  = function (birthYear) {
            return 2037 - birthYear
        }
        const age2 = calAge2(2000)
        console.log(age2);

    // Arrow Function 

        /*  Great for a quick one-line functions. 
            Has no this keyword
        */
        const calAge3 = birthYear =>  2037 - birthYear
        console.log(calAge3(2000));