// encpsulation

// common js module system(model export and reaquire)

// code moduler maintable and easer to debug.
// import to export 

const add = (a,b) => {
    return a + b ;

}
    const subs = (a,b) => {
        return a - b ;

    }


    const mult = (a,b) =>{
        return a * b ;

    }
    const div = (a,b) =>{
        return a / b ;

    }

    const PI = 3.214;

module.exports  = {add, mult, subs , div, PI} ;





