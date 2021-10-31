const { info } = require("./md");

info("Hello commonJS");

// import("./md.mjs").then((res) => {
//   const { log } = res;
//   log("HI ES module");
// });

(async () => {
  const res = await import("./md.mjs");
  const { log } = res;
  log("Hi ES module");
})();
