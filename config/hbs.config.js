const hbs = require('hbs');
const path = require('path');

hbs.registerPartials(path.join(__dirname, '../views/partials'));

hbs.registerHelper('active', (currentPath, hint, options) => {
    const args = options.hash;
    if (args.exact) {
      return currentPath === hint ? 'active' : '';
    } else {
      return currentPath.includes(hint) ? 'active' : '';
    }
  });