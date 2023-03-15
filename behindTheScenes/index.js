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
        In this First global execution context is created FOR THE TOP-LEVEL CODE.

            1. What is  Top-level ?
            => is basically code that is not inside any function.

        Functions should only be executed when they are called.
    */

    /*  Execution Context : Environment in which a piece of JavaScript is executed.
                            Stored all the necessary info for some code to be executed.

        => Now, in any JavaScript project, no matter how large it is,
           There is only ever one global execution context.
           It's always there as the default context,
           And it's where top-level code will execute.
    */

    // After creation of global context top level code executed there.
    // And after the top level code finished FUNCTIONS finally start to execute as well.
    // For each and every function call execution context will be created.



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