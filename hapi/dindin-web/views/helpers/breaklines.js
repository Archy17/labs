const Handlebars = require('handlebars');

module.exports = function breakLines(text) {
  const safeText = Handlebars
    .Utils
    .escapeExpression(text)
    .replace(/(\r\n|\n|\r)/gm, '<br>');

  return new Handlebars.SafeString(safeText);
};
