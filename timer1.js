const timer = function(number) {
  let milliseconds = number * 1000;
  if (number <= 0) {
    return;
  } else {
    setTimeout(function() {
      console.log(number);
      process.stdout.write("\u0007");
    }, milliseconds);
  }
};

const values = process.argv.slice(2);
for (const number of values) {
  timer(number);
}
