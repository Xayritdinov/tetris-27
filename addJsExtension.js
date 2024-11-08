const fs = require('fs');
const path = require('path');

const directory = path.join(__dirname, './');

fs.readdirSync(directory).forEach(file => {
  if (file.endsWith('.js')) {
    const filePath = path.join(directory, file);
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/(import\s+.*?from\s+['"])(\.\/.*?)(['"])/g, '$1$2.js$3');
    fs.writeFileSync(filePath, content);
  }
});
