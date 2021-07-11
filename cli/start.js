const { spawn, exec } = require('child_process');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const stream = (buffer) => console.log(Buffer.from(buffer).toString());
const run = file => {
  const filePath = path.join(process.cwd(), `./${file}`);
  const node = spawn('node', [file.toString()], { stdio: 'inherit' });

  exec(`node ${filePath}`, (err, stdout, stderr) => {
    if (err) {
      throw err;
    }
    // print output from child processes
    node.on('data', stream);
  });
};

const ignoreMatches = item => ![
  '.git',
  'cli',
  'node_modules',
  'package.json',
  '.gitignore',
  'README.md',
  'yarn.lock'
].includes(item);

const files = fs.readdirSync(process.cwd());
const choices = files.filter(ignoreMatches);
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
