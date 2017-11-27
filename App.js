import React, { Component } from 'react';
import { View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Constants } from 'expo';

import DeckList from "./components/DeckList";
import DeckView from "./components/DeckView";
import NewDeck from "./components/NewDeck";

const styles = {
    statusBar: {
        backgroundColor: 'red',
        height: Constants.statusBarHeight,
    }
};

const MainNavigator = TabNavigator({
    DeckList: {
        screen: DeckList,
    },
    NewDeck: {
        screen: NewDeck,
    }
}, {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: 'bottom',
});

const AppNavigator = StackNavigator({
    Home: {
        screen: MainNavigator,
    },
    DeckView: {
        path: 'udacicards-deck/:deck',
        screen: DeckView,
    },
});

export default class App extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <View style={styles.statusBar}/>
                <AppNavigator/>
            </View>
        );
    }
}
