import React, { Component } from 'react';
import { 
    View, 
    Text, 
    TextInput, 
    StyleSheet,
    TouchableNativeFeedback
} from 'react-native';

import { newDeck } from '../scripts/storage';

class NewDeck extends Component {
    static navigationOptions = {
        title: 'New Deck',
    };

    state = { text: '' }

    async save() {
        await newDeck(this.state.text);
        this.props.navigation.navigate('DeskList');
    }

    render() {
        const { text } = this.state;

        return (
            <View style={styles.container}>
                <Text>Name of this new awesome deck:</Text>
                <TextInput 
                    style={styles.textInput}
                    onChangeText={text => this.setState({ text })}
                    placeholder='Deck name...'
                />
                <TouchableNativeFeedback onPress={this.save.bind(this)}>
                    <View style={styles.button}>
                        <Text>Save `{text}`</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 15,
    },
    textInput: {
        fontSize: 20,
        padding: 7,
    },
    button: {
        padding: 7,
    }
});

export default NewDeck;