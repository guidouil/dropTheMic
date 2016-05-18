import { Template } from 'meteor/templating';

import './main.html';

UI.registerHelper('plural', function (number) {
  if (number > 1) {
    return 's';
  }
});

UI.registerHelper('greater', function (a, b) {
  return a > b;
});
