import fs from 'fs/promises'

const argv = process.argv;
// console.log(argv[2]);

const FILE = 'users.json';

let data = null
try {
    data = await fs.readFile(FILE, 'utf8')
} catch (error) {
    data = "[]"
}
const content = JSON.parse(data)
const command = argv[2]
if (command === '--list'){
    console.table(content);
    process.exit()
} 
 if (command === void 0) {
    console.log('Unknown command');
    process.exit()
}
content.push({name: argv[2], age: argv[3] })
await fs.writeFile(FILE, JSON.stringify(content, null, 2))

 