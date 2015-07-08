function MyClass() {

}

MyClass.prototype = {
  method : function() {
    return 'Hello from myclass method';
  }
};

var myClass = new MyClass();

module.exports = myClass;
