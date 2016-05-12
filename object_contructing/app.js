/***** super basic (naked!) class ******/
// class
var Animal = function () {};

// instance
var animal = new Animal();

/***** class with instance methods ******/
// class
var Animal = function () {};

// instance methods
Animal.prototype.someFunction = function() {}
Animal.prototype.someOtherFunction = function() {}

// instance
var animal = new Animal();

animal.someFunction() // this works
animal.SALFKJSDFLKJSDF() // doesn't work

animal instanceof Animal // true

animal.__proto__ ===
