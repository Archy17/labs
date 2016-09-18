const twinkle = (noun, wonderAbout) => {
  return `Twinkle, twinkle, little ${noun}.\nHow I wonder where you ${wonderAbout}`;
};

let twinkleBat = twinkle.bind(null, 'bat', 'are at');
let twinkleStar = twinkle.bind(null, 'star', 'are');

console.log(twinkleBat());
console.log(twinkleStar());
