import React, { Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

class NavigationBar extends Component {
    static propTypes = {
        from: PropTypes.object,
    };

    state = {};

    render() {
        return (
            <View style={styles.container}>
                <Text>Lolz</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default NavigationBar;