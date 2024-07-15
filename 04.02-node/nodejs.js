// Load the operating system, and filesystem modules
const os = require('node:os'); // const os = require('os');
const fs = require('node:fs'); // require('fs');

// get the logged in user's username
const user = os.userInfo().username;
console.log(user);

// specify a path for a working directory
const wkDir = os.homedir() + '/Desktop/tmpNode'; 

// If working directory does NOT exist, create it
if (!fs.existsSync(wkDir)) {
  fs.mkdirSync(wkDir, 0744)
  console.log(`Folder '${wkDir}' was successfully created!`);
}

try {
  const filePath = `${wkDir}/my-file.txt`;
  fs.openSync(filePath, 'w')
  fs.writeFileSync(filePath, '~~ A JavaScript Poem ~~\n', 'utf8');
  fs.appendFileSync(filePath, '-----------------------\n', 'utf8');
  fs.appendFileSync(filePath, 'JavaScript using Nodejs\n', 'utf8');
  fs.appendFileSync(filePath, 'raised the bar higher\n', 'utf8');
  fs.appendFileSync(filePath, 'from browser to general purpose\n', 'utf8');
  fs.appendFileSync(filePath, 'the language flies\n', 'utf8');
  fs.appendFileSync(filePath, 'ever higher\n', 'utf8');
  fs.closeSync(filePath);

  console.log(`File ${filePath} successfully created.`);
} catch (err) {
  console.log("Oops, an error occured whilst trying to create the file."); 
}