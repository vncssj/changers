import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Constants from 'expo-constants';
import Home from './../pages/Home';
import Details from './../pages/Details';

const AppNavigator = createStackNavigator({
        Home: {
                screen: Home,
        },
        Details: {
                screen: Details,
        }
}, {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
                headerStyle: {
                        backgroundColor: '#0CB5CF',
                        height: 0,
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                        fontWeight: 'bold'
                },
        }
})

export default Router = createAppContainer(AppNavigator);