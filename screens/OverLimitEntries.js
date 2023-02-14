import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import EntriesList from '../components/EntriesList';
import colors from '../colors';
export default function AllEntries({ navigation }) {
    return (
        <View style={styles.container}>

            <EntriesList type="over-limit" navigation={navigation} />

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: "center",
        width: '100%'
    },
});
