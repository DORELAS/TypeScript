// Interfaces allow us to create contracts other classes/ objects have to implement
// We can use them to define custom types without creating classes
// Interfaces ARE NOT compiled to JavaScript! It's just for checking/ validation done by our TypeScript compiler

var user_;

// This value does not satisfy the interface => Compilation error
// user = { anything: 'anything', anynumber: 5};
// This value does satisfy the interface

user_ = { username: 'max', password: 'supersecret' };

var car_1 = {
    accelerate: function (speed) {
        // ...
    }
};
