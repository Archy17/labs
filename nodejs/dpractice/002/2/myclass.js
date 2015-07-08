function MyClass() {

}

MyClass.prototype = {
  method : function() {
    return 'Hello from my own class'
  }
};

var myClass = new MyClass();

module.exports = myClass;
