const os = require("os");
// console.log(os.cpus());

console.log(__dirname);

// console.log(process.argv);

console.log(process.cwd());
process.on("exit", (code) => {
  console.log(code);
});

process.exit(101);
console.log("End");
