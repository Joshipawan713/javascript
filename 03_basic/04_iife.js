// Immediately Invoked Function Expressions (IIFE)

// global scope ka pollution problems.

(function db_connect(){
    // named IIFE
    console.log(`DB Connected`);
})();

// db_connect();


( (name) => {
    // unnamed IIFE
    console.log(`DB Connected Two ${name}`);
})('javascript');