const { spawn, exec } = require('child_process');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const stream = (buffer) => console.log(Buffer.from(buffer).toString());
const run = file => {
  const node = spawn('node', [`${file}`], { stdio: 'inherit' });
  const filePath = path.join(process.cwd(), `./${file}`);

  exec(`node ${filePath}`, (err, stdout, stderr) => {
    if (err) {
      throw err;
    }

    // print output from child processes
    node.on('data', stream);
  });
};

const ignoreMatches = list => item => ![
  '.git',
  'cli',
  'node_modules',
  'package.json',
  '.gitignore',
  'README.md',
  'yarn.lock'
].includes(item) && list.push(item);
let choices = [];

const files = fs.readdirSync(process.cwd());
files.forEach(ignoreMatches(choices));

const questions = [
  {
    type: 'list',
    name: 'file',
    message: 'Which file are you after?',
    choices,
  },
];
inquirer
  .prompt(questions)
  .then((answers) => {
    run(answers.file);
  })
  .catch((err) => console.log(err));
