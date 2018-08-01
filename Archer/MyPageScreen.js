
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


class MyPageScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>マイページ</Text>
                <Button
                    title="ホームへ"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
            </View>
        );
    }
}

export default (MyPageScreen);