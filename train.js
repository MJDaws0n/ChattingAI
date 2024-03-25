const brain = require('./brain.js');
const fs = require('fs');

// Define training data
const trainingData = [
  { input: "Hello", output: "Hello, how are you today?" },
  { input: "Hi", output: "Hello, how are you today?" },
  { input: "Yo", output: "Hello, how are you today?" },
  { input: "How are you?", output: "I am good thanks. What about you?" },
  { input: "How r u?", output: "I am good thanks. What about you?" },
  { input: "You good?", output: "I am good thanks. What about you?" },
  { input: "How are you", output: "I am good thanks. What about you?" },
  { input: "How r u", output: "I am good thanks. What about you?" },
  { input: "You good", output: "I am good thanks. What about you?" },
  { input: "U good?", output: "I am good thanks. What about you?" },
  { input: "u good?", output: "I am good thanks. What about you?" },
  { input: "u good", output: "I am good thanks. What about you?" },
  { input: "hi, how are you", output: "I am good thanks. What about you?" },
  { input: "hi, how you doing", output: "I am good thanks. What about you?" },
];

// Create a neural network
const net = new brain.recurrent.LSTM();

const config = {
  log: true,
  logPeriod: 100
};

// Train the neural network
net.train(trainingData, config);

// Test the neural network
const testData = 'drive';

const modelJSON = net.toJSON();
fs.writeFileSync('model.json', JSON.stringify(modelJSON));

const output = net.run(testData);

console.log('Input: '+testData+'\nOutput: ');