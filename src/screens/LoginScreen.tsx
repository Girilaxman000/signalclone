import React, { useState, useEffect } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import { Image, Input, Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import * as RootNavigation from "../navigation/RootNavigation";
import { HOME_ROUTE, REGISTER_ROUTE } from '../navigation/routes'
import { auth } from '../../firebase'


const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser: any) => {
            if (authUser) {
                RootNavigation.replace(HOME_ROUTE) //navigation is replaced by replace as after login we don't need to go back to login page.
            }
        })

        return unsubscribe;
    }, [])

    const signIn = () => {
        auth.signInWithEmailAndPassword(email, password)
            .catch((error) => alert(error))
    }

    return (
        <View style={styles.container}>
            <Image source={{
                uri: "data:image/png;base64,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"
            }}
                style={{ width: 100, height: 100 }}
            />
            <View style={styles.inputContainer}>
                <Input placeholder="Email" autoFocus value={email} onChangeText={text => setEmail(text)} />
                <Input placeholder="Password" secureTextEntry value={password} onChangeText={text => setPassword(text)} />
            </View>
            <Button containerStyle={styles.button} onPress={signIn} title="Login" />
            <Button containerStyle={styles.button} onPress={() => RootNavigation.navigate(REGISTER_ROUTE)} title="Register" type="outline" />
            <View style={{ height: 100 }} />
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    inputContainer: {
        width: 300
    },
    button: {
        width: 200,
        marginTop: 10
    }
})
