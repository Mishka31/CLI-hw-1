const fs = require("fs/promises");
const file = "../base/main.mjs";

(async (fileName) => {
  const file = await fs.readFile(fileName, 'utf8')
  // console.log(file);
  await fs.mkdir('./temp', {recursive: true})
  await fs.writeFile('./temp/temp.js', `${file}console.log('Hello word')`) 
})(file);
