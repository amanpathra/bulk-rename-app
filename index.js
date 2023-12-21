const fs = require('fs');
const path = require('path');

const replaceThis = 'jay';
const replaceWith = 'aman';

const preview = false;

try {
  const data = fs.readdir(path.join(__dirname, "/"), (err, data) => {

    for (item of data) {
      let newFile = item.replaceAll(replaceThis, replaceWith)
      if (!preview) {
        fs.rename(item, newFile, () => console.log('Rename Success'))
      } else if (item != newFile) {
        console.log(item + ' will be renamed to ' + newFile)
      }
    }

  })
} catch (err) {
  console.error(err);
}