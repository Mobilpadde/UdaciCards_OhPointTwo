import { AsyncStorage } from 'react-native';

const KEY = 'UdaciCards';

async function getCardsForDeck(name) {
	const item = await AsyncStorage.getItem(KEY);
	const deck = await JSON.parse(item || []);

	if (!deck && !deck[name]) { 
		return [];
	}

	return deck[name];
}

async function getAllDecks() {
	const item = await AsyncStorage.getItem(KEY);
	const deck = await JSON.parse(item) || {};

	const res = {};
	Object.keys(deck).map(name => res[name] = deck[name].length);

	return res;
}

async function newDeck(name) {
	const deck = { [name]: [] };
	await AsyncStorage.setItem(KEY, JSON.stringify(deck));

	return deck;
}

async function saveCard(card, deck) {
	const newDeck = [...deck, {
		question: card,
		answers: {
			total: 1,
			correct: 1,
		}
	}];

	await AsyncStorage.setItem(KEY, JSON.stringify(newDeck));

	return newDeck;
}

export {
	getCardsForDeck,
	getAllDecks,

	newDeck,
	saveCard,
};
