import { AsyncStorage } from 'react-native';

const KEY = 'UdaciCards';

function getCardsForDeck(name) {
	const item = await AsyncStorage.getItem(KEY);
	const deck = await JSON.parse(item);

	if (!deck && !deck[name]) { 
		return [];
	}

	return deck[name];
}

async function getAllDecks() {
	const item = await AsyncStorage.getItem(KEY);
	const deck = await JSON.parse(item) || {};

	return Object.keys(deck).map(name => ({ [name]: deck[name].length }));
}

function newDeck(name) {
	const deck = { [name]: [] };
	AsyncStorage.setItem(KEY, JSON.stringify(deck));

	return deck;
}

function saveCard(card, deck) {
	const newDeck = [...deck, card];
	AsyncStorage.setItem(KEY, JSON.stringify(newDeck));

	return newDeck;
}

export {
	getCardsForDeck,
	getAllDecks,
};