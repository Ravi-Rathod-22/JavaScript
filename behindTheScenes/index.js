/////////////////////////////////////////////////////////////////////////////////////////////////////
// An High-Level Overview of JavaScript

    /* JAVASCRIPT IS :

        1. High-level : 
            There are two type of languages :
                (i) LOW LEVEL : In this level memory management is good 
                    (a) Machine LANGUAGE : In this lang. code or written in 0 1 formate 

                    (b) Assembly LANGUAGE : 

                (ii) HIGH LEVEL : In this level memory management is not that much good.

        2. Garbage Collection : Cleaning the memory, so we don’t have to

            => Basically is algorithm  inside JS Engine in order not to clog it up with unnecessary stuff.
            => Mark & Sweep Algorithm is widely used in many GC out there.
            => So it's a little bit like JavaScript has a cleaning guy who cleans our memory from time to time
            => so that we don't have to do it manually in our code.

        3. Interpreted or just-in-time compiled :

            (i) Interpreted : Interpreter runs through the source code and executes it line by line.
                              Code still needs to be converted to machine code.

            (ii) just-in-time compiled : Entire code is converted into machine code at once, then executed immediately.

            // NOTE : Right JS is just-in-time compiled language before it was interpreted language.

        4. Multi-paradigm : 

            Paradigm : can also be termed as method to solve some problem or do some task.

            Programming Paradigm :
                (i)  Imperative Programming : 

                    (a) Procedural programming
                    (b) Object oriented programming
                    (c) Parallel processing

                (ii) Declarative programming paradigm : 

                    (a) Logic programming
                    (b) Functional programming 
                    (c) Database/Data driven programming

            JS IS : 
                1. Procedural programming
                2. Object-oriented programming (OOP)
                3. Functional programming

        5. Prototype-based object-oriented :

            => Every object in JavaScript has a built-in property, which is called its prototype

            => Every thing in Javascript is an object
            => Except for primitive values [Number, strings etc]

            Ex. : 
                array is basically the object in js
                and array have push , pop, indexof methods
                So here above methods are called property of array
            
            Note : The prototype is itself an object, so the prototype will have its own prototype,
                   making what's called a prototype chain. 
                   The chain ends when we reach a prototype that has null for its own prototype.
             


        6. First-class functions : 

            In a language with first-class functions, functions are simply treated
            as variables. We can pass them into other functions, and return them
            from functions.

            // Example : 

                const closeModal = () => {
                    modal.classList.add("hidden");
                    overlay.classList.add("hidden");
                }

                overlay.addEventListener("click", closeModal);

                // In above example passing a function into another 
                // function as an argument:
                // First-class Functions!

        7. Dynamic : 

        
    */



        
/////////////////////////////////////////////////////////////////////////////////////////////////////
//  The JavaScript Engine and Runtime 

    ////////////// JAVASCRIPT RUNTIME ENVIRONMENT /////////////////////

        // 1. JS Engine : to run js code and without this JS Runtime Env is not possible
        // 2. API : Connect with outer env. 
        //         Ex. DOM, Timers, Fetch API, console.log 
        //         => Above is the functionality and provided engine
        //         => apis accessible on window object for browser.

        // 3. Event Loop : 
        // 4. Call Back Queue : it is Data Structure that contains all call back functions that are ready to be executed.
        // 5. Micro Task Queue
        // 5. And Many more

    /* JS Engine is nothing but program that executes the JS Code.

        Every Browser has its own JavaScript Engine.
        But the well known JavaScript Engine is Google's V8 Engine.

        Any JavaScript Engine Works always contains :
            1. CAll Stack : Where our code is executed. Using something called execution contexts.

            2. Heap :  Unstructured memory pool.
                       Which stored all object that our application needs.

        => JavaScript is every where and to run js anywhere we just need JAVASCRIPT RUNTIME ENVIRONMENT


            # SIDE NOTE : 
                
                1. Compilation: Entire code is converted into machine code at once, and written to a binary file that can be executed by a computer.

                                      Step 1                                        Step 2
                    Source Code  ----------------> Portable File : Machine Code -------------> Program Running 
                                    COMPILATION                                   EXECUTION

                        *Execution happen way after compilation

                2. Interpretation: Interpreter runs through the source code and executes it line by line.

                                            Step 1      
                    Source Code  ---------------------------> Program Running 
                                    EXECUTION LINE BY LINE    

                        *Code still needs to be convert into machine code

                3. Just-in-time (JIT) compilation: Entire code is converted into machine code at once, then executed immediately.

                                       Step 1                       Step 2
                    Source Code  ----------------> Machine Code -------------> Program Running 
                                    COMPILATION                   EXECUTION

                        * NOT a portable file
                        * EXECUTION Happens immediately

                       
            ///// HOW JS ENGINE WORKS : /////
                       
                // CODE => PARSING => COMPILATION => EXECUTION
                       
                1. Parsing : Code Broken down into TOKENS

                             let a = 10;
                        => Here let , a , = and others convert into tokens

                    # Then There something like Syntax Parser => Which Convert Code into AST [ Abstract Syntax Tree ]

                        ## How AST looks like ?

                        CODE : const firstName = 'Ravi';

                        AST : In JSON
                        
                        {
                            "type": "Program",
                            "start": 0,
                            "end": 25,
                            "body": [
                              {
                                "type": "VariableDeclaration",
                                "start": 0,
                                "end": 25,
                                "declarations": [
                                    {
                                        "type": "VariableDeclarator",
                                        "start": 6,
                                        "end": 24,
                                        "id": {
                                            "type": "Identifier",
                                            "start": 6,
                                            "end": 15,
                                            "name": "firstName" <------ variable name 
                                        },
                                        "init": {
                                            "type": "Literal",
                                            "start": 18,
                                            "end": 24,
                                            "value": "Ravi", <------ variable value 
                                            "raw": "'Ravi'"  
                                        }
                                    }
                                ],
                                "kind": "const"
                                }
                            ],
                            "sourceType": "module"
                        }

                2. COMPILATION & EXECUTION : In JS Compilation and Execution go hand in hand it means work on JIT [Just in time compilation]
                        
                        => AST Goes to Interpreter and convert into bit code
                        => On above process take help of compiler to optimization code
                        # EXECUTION is not possible without two component Call stack and memory heap
                            
                       
    */




/////////////////////////////////////////////////////////////////////////////////////////////////////
// Execution Contexts and The Call Stack

    /*  By supposing that our code was just finished compiling.
        So the code is now ready to be executed.
        
        The browser's JavaScript engine then creates a special environment 
        to handle the transformation and execution of this JavaScript code.
        This environment is known as the Execution Context.
        
        The Execution Context contains the code that's currently running,
        and everything that aids in its execution.
        
        Execution Context is like big container which includes 2 components :
            1. Memory : also known as variable environment, 
                        in which everything is stored as key value pairs.
            2. Code : also know as thread of execution,
                      In which the code is executed one line at a time.
            
        Type Of Execution Context : 
            1. Global Execution Context : 
                In this First global execution context is created FOR THE TOP-LEVEL CODE.
        
                    1. What is  Top-level ?
                    => is basically code that is not inside any function.
                    
                    # Now, in any JavaScript project, no matter how large it is,
                        There is only ever one global execution context.
                        It's always there as the default context,
                        And it's where top-level code will execute.
                    
            2. Function Execution Context : 
            
                After creation of global context top level code executed there.
                And after the top level code finished FUNCTIONS finally start to execute as well.
                For each and every function call execution context will be created.
                
                Functions should only be executed when they are called.
                And At the Same time new execution context was created for each function.
                
                        
        The creation of an Execution Context (GEC or FEC) happens in two phases :
            1. Creation Phase
            2. Execution Phase
            
        # Code example to understand Execution Context Phases #
                        
            var n = 2;
        
            function square(num) {
                var ans = num * num;
                return ans;
            }
        
            var square2 = square(n);
            var square4 = square(4);
            
        (i) Creation Phase : Allocate memory for all variables and functions.
        
            => As soon as EC [Execution Context] encounters line from above code 
                it allocates memory to "n" in memory component or we can say variable environment.
                
                Something like :
                    n: undefined
                    
            => Then after there function with name "square".
                so now it allocates memory for function with name "square".
                
                Something like :
                    square : {
                        var ans = num * num;
                        return ans;
                    }
                
                here you it stored hole function code inside memory instead of 'undefined' 
                as we seen in variable with name "n".
                
                
            => Same goes for others 
                and so now memory components like something like below:
                    
                    n : undefined
                    square : {
                        var ans = num * num;
                        return ans;
                    }
                    square2 : undefined
                    square4 : undefined
                    
        (ii) Execution Phase : In this phase everything happen in code components or thread of execution.
        
        => So now once once again EC [Execution Context] goes through top to bottom line by line. 
        
        => Here we first have 
                var n = 2;
                
            So now in memory component value of "n" will be changed to 2.
                    n : 2
                    
        => now it goes to next line and there function so there nothing to execute or we can nothing to do.
        
        => then it goes to next line there is variable with name "square2".
            here the function "square" is called 
            
            And when ever function is called THE BRAND NEW EXECUTION CONTEXT WAS CREATED in side code component.
            
        => This new execution context again have two components MEMORY and CODE Components.
            and with that there also 2 phase memory creation and execution phase.
            
        => In Function Execution Context [FEC] Memory creation phase allocate memory to parameters, variables and functions.
        
        => So here in the "square" function there is "num" and "ans" corresponding to parameter and variable.
        
        => That's why in memory component it is stored as :
                    num : undefined
                    ans : undefined
                    
        => and now code is executed in code component so parameter "num"
            will receive the value as 2 because "square" function pass value as n and 
            also invoke at variable "square2" 
            
        => So no in the memory component value of "num" is chang :
                    n : 2
                    
        => after that in code component 
                    var ans = num * num ;
            is going to execute and it will change value of "ans"
                    ans : 4
                    
        => Now goes to next line there special keyword return
                    return ans;
            which means it is goes to origin of the function where it is invoked means come to line 
                    var square2 = square(n);
                    
        => Every time function comes to in "return" stage it goes after there parent execution context.
            And the most important thing is that execution context which is created by the function after
            returning the function it will DESTROY.
            In over example it is come back to global execution context.
            
        => So we are in parent execution context of execution context which is created by "square" function called.
        
        => Here now value of "square2" is changed to 4
                    square2 : 4;    
                    
        => THIS SAME PROCESS WILL HAPPEN FOR VARIABLE "square4" VARIABLE.
        
        => AS SOON AS "square4" VARIABLE ASSIGNED VALUE THE GEC ALSO GOT DESTROY.
        
        
        ##### CALL STACK #####
        
        => Call stack is nothing but a stack which manages the execution context.
        
        => When ever the any JS Code is executed the hole Call stack is populated 
            with GEC.
            
        => When ever the function is executed the new execution context was created 
            and it will goes inside the call stack.
            
            * In over example let suppose you have E1 execution context which created
                by "square2" variable so goes to into the call stack and places above GEC.
                and when this function is going return E1 execution context pop from the call stack.
                
                    |     |                                    |     |               
                    |     |                                    |     |            
                    | E1  | => Call stack                      |     | => Call stack 
                    |_____|    When "Square2"                  |_____|    When "Square2"
                    | GEC |    function called                 | GEC |    function returned.
                    |_____|                                    |_____|
            
        => SAME GOES FOR "square4" VARIABLE.
        
        => Call stack only for manage Execution Context and it is going to be empty when hole code 
        was completely executed.
    */




/////////////////////////////////////////////////////////////////////////////////////////////////////
// Scope and The Scope Chain

        /*
            Scoping : How our program's variables are organized and accessed 
                        
            Lexical Scoping : Scoping is controlled by placement of functions and blocks in the code.

            Scope : Space or environment in which a certain variable is declared (variable environment in case of functions)

            Scope of a variable :  Region of our code where a certain variable can be accessed.

            Type of Scope : 
            
                1. Global : 
                        
                    => Outside of any function or block
                    => Variable declared in global scope are accessible everywhere

                    const me = 'Ravi';
                    const job = 'Software';
                    const year = 1989;
                        
                2. Local or Function :
                
                    => Variables are accessible only inside function, NOT outside
                     
                        function calAge (birthYear) {
                            const now = 2037;
                            const age = now - birthYear;
                            return age;
                        }

                        console.log(now); // Reference Error

                3. Block [ES6] :

                    => Variables are accessible only inside block
                    => However, this only applies to let and const variables!
                    => If we use var inside block then it is possible to access outside of scope
                    => Function  are also block scoped (only in strict mode)

                    if(year >= 2000 && year <= 2005) {
                        const millenial = true;
                        const food = "Apple";
                    }

                    console.log(millenial); // Reference Error

                    => Block Ex : If_else, For_Loop etc.


                    NOTE : Function Scope is Same as variable scope 

                        
        */







/////////////////////////////////////////////////////////////////////////////////////////////////////
// Hoisting and TDZ in Practice

    // Hoisting 

/* 
    // Code 1 : 
        // var x = 7;

        // function getName() {
        //     console.log('Ravi Rathod');
        // }

        // getName();  
        // console.log(x);


    // Code 2 : 
        getName();  
        console.log(x);         

        var x = 7;

        function getName() {
            console.log('Ravi Rathod');
        }

    # Show difference in Code 1 and Code 2

    Code 1 : function and variable accessed after initialization
    Code 2 : function and variable accessed before initialization

    In code 2 function got executed and variable value got undefined 

    This happens because of HOISTING.

    HOISTING : is phenomena in js by which you access variable and function even before initialize
                you can access it without any error 


    // Code 3 : 
        
        var x = 7;
        
        function getName() {
            console.log('Ravi Rathod');
        }

        getName();
        console.log(x);
        console.log(getName);


    // Code 4 : 
        
        getName();                                      <--------------- PUT DEBUGGER IN CONSOLE TO UNDERSTAND BETTER
        console.log(x);
        console.log(getName);

        var x = 7;
        
        function getName() {
            console.log('Ravi Rathod');
        }

    # NOW :
        - In Code 3 and Code 4 We Can see same result
        - Because when ever the JS program run execution context is created
            and there is in the memory component memory is allocate for each every variable and function
        
        - So that why In 'CODE 4' When function start to execute value of 'x' was undefined and 
            for 'getName' function the value is hole function

        - You better understand by putting debugger at very first line of code. 
    
    // Code 5 :
        
        getName();                                      <--------------- PUT DEBUGGER IN CONSOLE TO UNDERSTAND BETTER
        console.log(x);
        console.log(getName);
        console.log(getName2);

        var x = 7;

        var getName2 = function () {
            console.log('Function Expression');
        }

        var getName = () => {
            console.log('Arrow Function')
        }

    # Now :
        - In Code 5 We use function expression and arrow function 
        - Here we declare function as variable so when we run this code
            both function and variable got undefined in console.

        - Better understand put debugger and run command in browser.
    
*/

    // TDZ [Temporal Dead Zone]:

/* 
        * 'let' and 'const' Hoisted ?
        - Technically, yes. But not in practice

        Because of the above answer 'let' and 'const' are in TDZ 

        * What is TDZ ? 
        - 
*/