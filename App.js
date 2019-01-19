import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from "redux";
import reducers from './src/reducers';
import Header from "./src/components/Header";
import LibraryList from "./src/components/LibraryList";

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View style={styles.container}>
                    <Header title="Tech Stack"/>
                    <LibraryList/>
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
