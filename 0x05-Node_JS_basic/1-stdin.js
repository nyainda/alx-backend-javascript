process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.setEncoding('utf8');
process.stdin.on('readable', () => {
  const inputText = process.stdin.read();
  if (inputText) process.stdout.write(`Your name is: ${inputText}`);
});
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
