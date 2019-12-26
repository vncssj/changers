import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Constants from 'expo-constants';
import Home from './../pages/Home';
import Register from '../pages/Register';

const AppNavigator = createStackNavigator({
        Home: {
                screen: Home,
        },
        Register: {
                screen: Register,
                navigationOptions: {
                        headerStyle: {
                                backgroundColor: '#0CB5CF',
                        },
                        headerTitle: "Faça parte da nossa Comunidade"
                },
                headerLeft: true,
                headerTintColor: '#fff',
        },
}, {
        initialRouteName: 'Register',
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