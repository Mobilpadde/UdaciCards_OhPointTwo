import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import interpolate from 'color-interpolate';

import { getCardsForDeck } from '../scripts/storage';

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	card: {
        height: 50,
	},

    cardText: {
        fontSize: 32,
        textAlign: 'center',
    }
});

class DeckView extends Component {
	static navigationOptions = ({ navigation, screenProps }) => ({
		title: `Deck 'o ${navigation.state.params.deck}`,
	});
    static propTypes = {};

    state = {
    	background: interpolate(['#ff1111', '#11ff11']),
    };

    render() {
    	const { navigation } = this.props;
        const { background } = this.state;

    	const name = navigation.state.params.deck;
    	const deck = getCardsForDeck(name);

        return (
        	<View style={styles.container}>
        		{
        			deck.length > 0 &&
        			deck.map(card => {
                        const { total, correct } = card.answers;

                        return (
                            <View style={[styles.card, {backgroundColor: background(correct / total)}]} key={card.question + Math.random().toString().substr(5, 10)}>
                                <Text style={styles.cardText} adjustFontSizeToFit={true}>{card.question}</Text>
                            </View>
                        );
                    })
        		}
        	</View>
        );
    }
}

export default DeckView;