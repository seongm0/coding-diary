/**
 * @link
 * @name
 */
const readline = require('readline');

/**
 *
 * @param {string} str
 * @returns {number[]}
 */
const strToNumberArr = (str) => str.split(' ').map(Number);

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
	input.push(Number(line));
	input.push(line);
	input.push(JSON.parse(line));
}).on('close', () => {
	const [] = input;

	console.log('\n');
	const result = solution();

	console.log(result);

	process.exit();
});

function solution() {}
