import { AsyncStorage as store } from 'react';

function getCardsForDeck(deck) {
	const contents = new Array(~~(Math.random() * 10) + 1).fill(0).map(() => {
		const question = new Array(~~(Math.random() * 10) + 1).fill(0).map(() => String.fromCharCode(~~(Math.random() * (122 - 97) + 97)));

		const total = ~~(Math.random() * 100);
		return {
			question,
			answers: { 
				total,
				correct: ~~(Math.random() * total) + 1
			}
		};
	});

	return contents
}

// TODO: Save tries and correct answers, colour the deck between red and green in correspondence to how awesome you are.
function getAllDecks() {
	return {
		'javascript': ~~(Math.random() * 10),
		'react': ~~(Math.random() * 10),
	}
}

export {
	getCardsForDeck,
	getAllDecks,
};