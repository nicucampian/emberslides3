const path = require('path');
const fs = require('fs');

module.exports = function processDir(_path) {
  const localPath = path.resolve(__dirname, _path);
  const data = new Promise(function(res,rej){
    fs.readdir(localPath, function(err, content) {
      const list = content.map(function(item) {
        return new Promise(function(resolve, reject) {
          const itemPath = path.resolve(localPath, item);
          fs.lstat(itemPath, function(err, stats) {
            const type = stats.isDirectory() ? true : false;
            const dirItem = { name: item, isFolder: type};
            resolve(dirItem);
          });
        });
      });
      Promise.all(list).then(function(value) {
        res(value);
      });
    });
  });
  return data;
};
