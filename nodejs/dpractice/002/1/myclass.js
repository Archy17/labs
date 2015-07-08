// create a constructor
function MyClass() {

}

// add a method to prorotype of constructor
MyClass.prototype = {
  method : function() {
    return 'Hello myclass'
  }
};

// instantiate a objet from MyClass constructor
var myClass = new MyClass();

// export myClass
module.exports = myClass;
