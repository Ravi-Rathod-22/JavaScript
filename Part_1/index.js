// LINKING A JAVASCRIPT FILE :

    // Three ways :
        // 1. Embedding code
            // (i)
            // <body>  
                // <script>  
                    // document.write("Hello World");  
                // </script>  
            // </body>  

            // (ii)
            // <head>  
                // <script>  
                    // document.write("Hello World");  
                // </script>  
            // </head>  
            
        // 2. Inline code
            // <a href="#" onClick="alert('Welcome !');">Click Me</a>  

        // 3. External file
            // <body>  
                // <script src="index.js"></script> 
            // </body>

        
/////////////////////////////////////////////////////////////////////////////////////////////////////
// DATA TYPE :

    // 1. Object
        let me = {
            name : 'Ravi'
        }

    // 2. PRIMITIVE [EVERYTHING ELSE]
        // (i) Number: Floating point numbers => Used for decimals and integers
            let age = 23;

        // (ii) String: Sequence of characters => Used for text
            let firstName = 'Ravi';
        
        // (iii) Boolean: Logical type that can only be true or false => Used for taking decisions 
            let fullAge = true;

        // (iv) Undefined: Value taken by a variable that is not yet de ned (‘empty value’)
            let children;

        // (v) Null: Also means ‘empty value’
        
        // (vi) Symbol (ES2015): Value that is unique and cannot be changed [Not useful for now]

        // (vii) BigInt (ES2020): Larger integers than the Number type can hold

        // IMP : JavaScript has dynamic typing: We do not have to manually de ne the data type of
        //       the value stored in a variable. Instead, data types are determined automatically.


/////////////////////////////////////////////////////////////////////////////////////////////////////
// LET, CONST & VAR :

        // Mutable : value that only declare and reassign 
            // 1. let
                let birthYear = 1991;
                birthYear = 2000;
            // 2. var
                var job = 'programmer';
                job = 'teacher'
        
        // Immutable : value that not declare and not only reassign 
            // 1. const
            const ageRavi = 23;
            // ageRavi = 1990;  => Get Error
            // const job; => Get Error

        ///// NOTE : We can directly assign value to variable. We don't have to declare variable 
        //           This is create variable in scoped instead of that it will create object in Global variable                 
            lastName = 'Schmedtmann';
            console.log(lastName);


///////////////////////////////////////////////////////////////////////////////////////////////////// 
// BASIC OPERATORS:

        // Operator   =>  Description

        //    +           Addition
        //    -           Subtraction
        //    *           Multiplication
        //    **          Exponentiation (ES2016)
        //    /           Division
        //    %           Modulus (Division Remainder)
        //    ++          Increment
        //    --          Decrement


/////////////////////////////////////////////////////////////////////////////////////////////////////
// OPERATOR PRECEDENCE : 
        // NOTE  : Operator precedence describes the order in which operations are performed in an arithmetic expression.
        //         Multiplication (*) and division (/) have higher precedence than addition (+) and subtraction (-).


/////////////////////////////////////////////////////////////////////////////////////////////////////
    // TYPE CONVERSION AND COERCION :

        // 1. TYPE CONVERSION : User can do. 
        // 2. TYPE COERCION : User can't do. Happen by JS Only 


/////////////////////////////////////////////////////////////////////////////////////////////////////
// TRUTHY AND FALSY VALUES :

        // FALSY VALUES IN JS :
            // (i) 0
            // (ii) ""
            // (iii) null
            // (iv) undefined
            // (v) NaN


/////////////////////////////////////////////////////////////////////////////////////////////////////
// EQUALITY OPERATORS:

        // 1. == : Check Only value 
        console.log('18' == 18 ); // Output : true

        // 2. === : Check Value and Data Type Also
        console.log('18' === 18); // Output : false

        // NOTE : Use only [===] to avoid bugs and error


/////////////////////////////////////////////////////////////////////////////////////////////////////
// LOGICAL OPERATORS :

        // 1. && => Both Condition is true then and hole expression going to be true 
        // 2. || => If only one condition true then expression is true  
        // 3. ! => toggle boolean value 


/////////////////////////////////////////////////////////////////////////////////////////////////////
// THE SWITCH STATEMENT : 
        // NOTE : Use this instead of multiple if else condition


        
     
