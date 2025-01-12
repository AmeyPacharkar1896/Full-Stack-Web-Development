
const fs = require("node:fs/promises");
const path = require("node:path");

async function changeWord() {
  const dataFilePath = path.join('.', 'data.txt');
  try {
    // Read the file content as a string
    const data = await fs.readFile(dataFilePath, 'utf8');
    // Replace "hello" with "Hi"
    const updatedData = data.replace(/Hello/g, 'Hi');
    // Write the updated content back to the file
    await fs.writeFile(dataFilePath, updatedData, 'utf8');
    console.log('File content updated successfully!');
  } catch (err) {
    console.error('Error processing the file:', err);
  }
}

module.exports.changeWord = changeWord;