import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import AddChatScreen from '../screens/AddChatScreen';
import Home from '../screens/Home';
import ChatScreen from '../screens/ChatScreen';
import { auth } from '../../firebase';
import * as RootNavigation from "../navigation/RootNavigation";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons"
import Icon from 'react-native-vector-icons/FontAwesome'

import {
    LOGIN_ROUTE,
    REGISTER_ROUTE,
    HOME_ROUTE,
    CHAT_ROUTE,
    CHT_ROUTE
} from './routes';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import { navigation } from './RootNavigation';

type Props = {
    initialRoute: string
}

type MainStackParams = {
    LoginScreen: undefined,
    RegisterScreen: undefined,
    AddChatScreen: undefined,
    Home: undefined,
    ChatScreen: undefined
}

const Stack = createStackNavigator<MainStackParams>();

const AppNavigator = ({ initialRoute }: { initialRoute: any }) => {

    const globalScreenOptions = {

        // headerTintColor: { //any icon will be changed white
        //   color: "white"
        // }
    }

    const signOutUser = () => {
        auth.signOut().
            then(() => {
                RootNavigation.navigate(LOGIN_ROUTE)
            });
    }

    return (
        <Stack.Navigator screenOptions={globalScreenOptions}>
            <Stack.Screen options={{
                title: 'Login',
                headerTitleAlign: 'center',
            }} name={LOGIN_ROUTE} component={LoginScreen} />
            <Stack.Screen name={REGISTER_ROUTE} component={RegisterScreen} />
            <Stack.Screen options={{
                headerRight: () => (
                    <View style={{ display: "flex", flexDirection: "row", marginRight: 20, justifyContent: "space-between" }}>
                        <TouchableOpacity activeOpacity={0.5} style={{ marginRight: 20 }}>
                            <Icon name="video-camera" color="blue" size={24} />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5}>
                            <Icon name="phone" color="blue" size={24} />
                        </TouchableOpacity>
                    </View>
                )
            }}
                name={CHT_ROUTE} component={ChatScreen} />
            <Stack.Screen name={CHAT_ROUTE} component={AddChatScreen} />
            <Stack.Screen options={{
                headerLeft: () => (
                    <TouchableOpacity activeOpacity={0.5} onPress={signOutUser}>
                        <Avatar rounded source={{ uri: auth?.currentUser?.photoURL || "https://upload.wikimedia.org/wikipedia/commons/5/59/AjayDevgan.jpg" }} />
                    </TouchableOpacity>

                ),
                headerRight: () => (
                    <View style={{ display: "flex", flexDirection: "row", marginRight: 20, justifyContent: "space-between" }}>
                        <TouchableOpacity activeOpacity={0.5} style={{ marginRight: 20 }}>
                            <AntDesign name="camerao" color="blue" size={24} />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5} onPress={() => RootNavigation.navigate(CHAT_ROUTE)}>
                            <SimpleLineIcons name="pencil" color="blue" size={24} />
                        </TouchableOpacity>
                    </View>
                )
            }} name={HOME_ROUTE} component={Home} />
        </Stack.Navigator>
    );
};

export default AppNavigator;