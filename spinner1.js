const spinner = '|/-\\|/-\\|';
let timer = 0;
for (const char of spinner) {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `)
  }, timer += 200);
}
setTimeout(() => {
  console.log()
},timer);
