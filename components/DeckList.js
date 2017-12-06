import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { getAllDecks } from '../scripts/storage';
import Deck from './Deck';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 15,
    }
});

class DeckList extends Component {
    static navigationOptions = {
        title: 'Deck List',
    };

    static propTypes = {};
    state = { decks: {} };

    componentWillMount() {
        getAllDecks().then(decks => this.setState({ decks }));
    }

    render() {
        const { navigation } = this.props;
        const { decks } = this.state;

        return (
            <View style={styles.container}>
                {
                    decks &&
                    Object.keys(decks).map(
                        name =>
                            <Deck key={name + decks[name]} name={name} cards={decks[name]} to={() => navigation.navigate('DeckView', { deck: name })}/>
                    )
                }
            </View>
        );
    }
}

export default DeckList;
