var language = {
  name: 'JavaScript',
  desc: 'awesome',
  usage: ['Frontend', 'Backend', 'Mobile', 'Embedded Systems', 'IoT']
};

function languageIntroducement(novice) {
  var usageLength = this.usage.length;
  var usage = this.usage.reduce(function(list, item, index, array) {
    if (index + 1 === usageLength) {
      return list + ' and ' + item + ' development!';
    } else {
      return list + ', ' + item;
    }
  });
  var msg = 'Hey, ' + novice + '! The language ' + this.name + ' is ' + this.desc + ' for ' + usage;

  return msg;
}

console.log(languageIntroducement.call(language, 'All of you'));

