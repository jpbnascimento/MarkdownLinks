const fs = require('fs');

const mdLinks = (path) => new Promise((resolve, reject) => {
  if (!path) {
    reject('path not found'); // eslint-disable-line prefer-promise-reject-errors
  }
  fs.readFile(path, 'utf8', (error, result) => {
    if (error) {
      reject('file not found'); // eslint-disable-line prefer-promise-reject-errors
    } else {
      const regex = /\[(.+?)\]\((http.?:\/\/[^\)]*)\)/gm; // eslint-disable-line no-useless-escape

      const links = result.match(regex).map((item) => {
        const splited = item.split('](');
        return {
          text: splited[0].slice(1),
          href: splited[1].slice(0, -1),
        };
      });
      resolve(links);
    }
  });
});

module.exports = mdLinks;
