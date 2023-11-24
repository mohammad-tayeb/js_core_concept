// we can check the arguments sand by user inside a function using console.log(arguments). 
function sum(a,b){
    console.log(a,b);  // only shows the valid arguments
    console.log(arguments); //show all the arguments
    console.log(arguments[3])
}
sum(10,16,19,39);

// { '0': 10, '1': 16, '2': 19, '3': 39 } -----> array like object***