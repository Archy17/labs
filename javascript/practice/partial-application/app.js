///////////// Public Methods
var addClass = addClass;
var partial  = partial;

///////////// Private Methods
var _init = _init;

///////////// Function Declarations
function addClass(className, element) {
  element.className += ' ' + className;

  return element;
}

function partial(fn, param1) {
  return function(param2) {
    return fn(param1, param2);
  }
}

function _init() {
  var addTitleClass     = partial(addClass, 'title');
  var addSpotlightClass = partial(addClass, 'spotlight');

  var ids = ['hero', 'hero-p'];

  var elements = ids.map(function(item) {
    return document.getElementById(item);
  });

  elements = elements.map(addTitleClass);
  elements = elements.map(addSpotlightClass);
  console.log(elements);
}

///////////// Bootstrap
_init();
