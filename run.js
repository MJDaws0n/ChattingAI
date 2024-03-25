const fs = require('fs');
const brain = require('./brain.js');

const modelJSON = JSON.parse(fs.readFileSync('model.json', 'utf-8'));
const net = new brain.recurrent.LSTM();
net.fromJSON(modelJSON);

const testData = 'Hello';
const output = net.run(testData);

console.log('Input: '+testData+'\nOutput: '+output);