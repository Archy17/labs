// Constructors
function MyClass() {

}

// MyClass prototype object
MyClass.prototype = {
  method : function() {
    return 'Hello from prototype of MyClass'
  }
};

// Public class
var myClass = new MyClass();

module.exports = myClass;
