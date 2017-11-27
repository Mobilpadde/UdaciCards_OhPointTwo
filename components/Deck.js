import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableNativeFeedback
} from 'react-native';
import PropTypes from 'prop-types';

class Deck extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        to: PropTypes.func.isRequired,
        cards: PropTypes.number,
    };
    state = {};

    render() {
        const { name, cards, to } = this.props;

        return (
            <View style={styles.container}>
                <TouchableNativeFeedback onPress={to}>
                    <View>
                        <Text adjustFontSizeToFit={true} numberOfLines={1} style={styles.name}>{name.slice(0, 1).toUpperCase() + name.slice(1)}</Text>
                        <Text adjustFontSizeToFit={true} numberOfLines={1} style={styles.cards}>{cards || 0} cards</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(72, 232, 182, 0.5)',
        height: 75,
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 5,
    },
    name: {
        fontSize: 32,
        textAlign: 'center',
    },
    cards: {
        fontSize: 24,
        textAlign: 'center',
    },
});

export default Deck;