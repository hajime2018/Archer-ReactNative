import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator, BottomTabBar, StackNavigator ,TabNavigator} from 'react-navigation';
import HomeScreen from './HomeScreen';
import MyPageScreen from './MyPageScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



const RootBottomTabNavigator = createBottomTabNavigator (
    {
        Home: {
            screen: HomeScreen,
        },
        MyPage: {
            screen: MyPageScreen,
        },
        
    },
    {
        //initialRouteName: 'Home',
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                    iconName = `ios-home${focused ? '' : '-outline'}`;
                } else if (routeName === 'MyPage') {
                    iconName = `ios-person${focused ? '' : '-outline'}`;
                }

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Ionicons name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    }  
);

export default class App extends React.Component {
    render() {
        return <RootBottomTabNavigator />;
    }
}

