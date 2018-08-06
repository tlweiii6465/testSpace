import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Linking } from 'react-native';

const URLS = [
    'example://colors/green',
    'example://colors/%23fff400',
    'example://colors/green?textColor=red'
];

const ListItem = ({ url, onPressItem }) =>
    <TouchableOpacity
        style={styles.listItem}
        onPress={ () => onPressItem(url) }>
        <Text style={styles.listItemText}>{ url }</Text>
    </TouchableOpacity>;

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Press one of the links below
            </Text>
            <FlatList
                data={ URLS }
                keyExtractor={(item, index) => index}
                renderItem={({ item }) =>
                    <ListItem onPressItem={ url => Linking.openURL(url) } url={ item } />
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch'
    },
    text: {
        fontSize: 24,
        marginBottom: 18
    },
    listItem: {
        marginBottom: 8
    },
    listItemText: {
        textDecorationLine: 'underline'
    }
});