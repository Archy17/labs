const argsToArray = (args) => Array.prototype.slice.call(args, 0);
const partial = function() {
  let args = argsToArray(arguments);

  // Grab the function (the first parameter)
  // args now contains the remaining args.
  let fn = args.shift();

  // Return a function that calls fn
  return () => {
    let remainingArgs = argsToArray(arguments);

    return fn.apply(this, args.concat(remainingArgs));
  };
};

const twinkle = (noun, wonderAbout) => {
  return `Twinkle, twinkle, little ${noun}.\nHow I wonder where you ${wonderAbout}`;
};

let twinkleBat = partial(twinkle, 'bat', 'are at');
let twinkleStar = partial(twinkle, 'star', 'are');

console.log(twinkleBat());
console.log(twinkleStar());
