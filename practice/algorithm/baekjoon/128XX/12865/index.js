/**
 * @link https://www.acmicpc.net/problem/12865
 * @description
 * 
-문제-

이 문제는 아주 평범한 배낭에 관한 문제이다.

한 달 후면 국가의 부름을 받게 되는 준서는 여행을 가려고 한다. 세상과의 단절을 슬퍼하며 최대한 즐기기 위한 여행이기 때문에, 가지고 다닐 배낭 또한 최대한 가치 있게 싸려고 한다.

준서가 여행에 필요하다고 생각하는 N개의 물건이 있다. 각 물건은 무게 W와 가치 V를 가지는데, 해당 물건을 배낭에 넣어서 가면 준서가 V만큼 즐길 수 있다. 아직 행군을 해본 적이 없는 준서는 최대 K만큼의 무게만을 넣을 수 있는 배낭만 들고 다닐 수 있다. 준서가 최대한 즐거운 여행을 하기 위해 배낭에 넣을 수 있는 물건들의 가치의 최댓값을 알려주자.

-입력-

첫 줄에 물품의 수 N(1 ≤ N ≤ 100)과 준서가 버틸 수 있는 무게 K(1 ≤ K ≤ 100,000)가 주어진다. 두 번째 줄부터 N개의 줄에 거쳐 각 물건의 무게 W(1 ≤ W ≤ 100,000)와 해당 물건의 가치 V(0 ≤ V ≤ 1,000)가 주어진다.

입력으로 주어지는 모든 수는 정수이다.

-출력-

한 줄에 배낭에 넣을 수 있는 물건들의 가치합의 최댓값을 출력한다.

 */
const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
	input.push(line);
}).on('close', () => {
	const [n, k] = input.shift().split(' ').map(Number);

	const result = func(
		n,
		k,
		input.map((v) => v.split(' ').map(Number)),
	);

	console.log(result);

	process.exit();
});

const func = (n, k, items) => {
	const vSum = [];
	for (let i = 0; i <= n; i++) {
		const newArray = new Array(k + 1).fill(0);
		vSum.push(newArray);
	}

	for (let i = 1; i <= n; i++) {
		const [w, v] = items[i - 1];
		for (let j = 0; j <= k; j++) {
			if (j < w) {
				vSum[i][j] = vSum[i - 1][j];
			} else {
				vSum[i][j] = Math.max(vSum[i - 1][j], vSum[i - 1][j - w] + v);
			}
		}
	}

	return vSum[n][k];
};

// 메모리 초과
// const func2 = (n, k, items) => {
// 	const vSum = [];
// 	const recur = (_k, curW, curV, _items) => {
// 		if (!_items || _items.length === 0) {
// 			vSum.push(curV);
// 			return;
// 		}

// 		for (let i = 0; i < _items.length; i++) {
// 			const [w, v] = _items[i];
// 			const isSum = curW + w <= _k;

// 			if (isSum) {
// 				recur(
// 					_k,
// 					curW + w,
// 					curV + v,
// 					_items.filter((v, idx) => idx > i),
// 				);
// 			} else {
// 				vSum.push(curV);
// 			}
// 		}
// 	};

// 	recur(k, 0, 0, items);

// 	return Math.max(...vSum);
// };
