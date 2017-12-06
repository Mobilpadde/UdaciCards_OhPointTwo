import React, { Component } from 'react';
import { 
    Text, 
    View, 
    StyleSheet, 
    TextInput,
    TouchableNativeFeedback
} from 'react-native';
import PropTypes from 'prop-types';
import interpolate from 'color-interpolate';

import { getCardsForDeck, saveCard } from '../scripts/storage';

const styles = StyleSheet.create({
	container: {
		flex: 1,
        margin: 15,
	},

	card: {
        height: 50,
	},

    cardText: {
        fontSize: 32,
        textAlign: 'center',
    },

    textInput: {
        fontSize: 20,
        padding: 7,
    },

    button: {
        padding: 7,
    }
});

class DeckView extends Component {
	static navigationOptions = ({ navigation, screenProps }) => ({
		title: `Deck 'o ${navigation.state.params.deck}`,
	});
    static propTypes = {};

    state = {
    	background: interpolate(['#ff1111', '#11ff11']),
        text: '',
        deck: []
    };

    componentWillMount() {
        const name = this.props.navigation.state.params.deck;

        getCardsForDeck(name).then(cards => this.setState(old => ({
            ...old,
            deck: [...cards],
        })));
    }

    async save() {
        await saveCard(this.state.text, this.state.deck);
        this.props.navigation.navigate('DeskList');
    }

    render() {
    	const { navigation } = this.props;
        const { background, deck, text } = this.state;

    	const name = navigation.state.params.deck;

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

                <View>
                  <TextInput 
                      style={styles.textInput}
                      onChangeText={text => this.setState({ text })}
                      placeholder='Card name...'
                  />
                  <TouchableNativeFeedback onPress={this.save.bind(this)}>
                      <View style={styles.button}>
                          <Text>Save `{text}`</Text>
                      </View>
                  </TouchableNativeFeedback>
              </View>
        	</View>
        );
    }
}

export default DeckView;
