var language = {
  name: 'JavaScript',
  desc: 'awesome',
  usage: ['Frontend', 'Backend', 'Mobile', 'Embedded Systems', 'IoT']
};

var developer = {
  name: 'John'
};

var evangelist = {
  jobTitle: 'JavaScript Engineer'
};

function helper(fn, context, args) {
  return fn.apply(context, args);
} 

// func 1
function languageIntroducement(novice) {
  var usageLength = this.usage.length;
  var usage = this.usage.reduce(function(list, item, index, array) {
    if (index + 1 === usageLength) {
      return list + ' and ' + item + ' development!';
    } else {
      return list + ', ' + item;
    }
  });
  var msg = 'Hey, ' + novice + '! The ' + this.name + ' programming language is ' + this.desc + ' for ' + usage;

  return msg;
}

// func 2
function languageEvangelism(dev, evangelist) {
  return [
    helper(languageIntroducement, language, [dev.name]),
    '\nYou should learn ' + this.name + '!1!!1!11',
    '\nI am a ' + evangelist.jobTitle,
    ' and I can help you!'
  ].join('');
}

console.log('=== Language Introducement ===');
console.log(helper(languageIntroducement, language, ['All of you']));

console.log('\n\n=== Language Evangelism ===');
console.log(helper(languageEvangelism, language, [developer, evangelist]));
