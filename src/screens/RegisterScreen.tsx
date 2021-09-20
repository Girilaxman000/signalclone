import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Image, Input, Button } from 'react-native-elements'
import { auth } from '../../firebase'
import * as RootNavigation from '../navigation/RootNavigation'
import { LOGIN_ROUTE } from '../navigation/routes'

const RegisterScreen = () => {
    const [fullName, setFullName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    const Register = () => {
        auth.createUserWithEmailAndPassword(email, password)
            .then((authUser: any) => {
                authUser.user.updateProfile({
                    displayName: fullName,
                    photoURL: imageUrl || "https://upload.wikimedia.org/wikipedia/commons/5/59/AjayDevgan.jpg"
                }),
                    RootNavigation.navigate(LOGIN_ROUTE)
            })

    }

    return (
        <View style={styles.container}>
            <Text>
                Create A Signal Account
            </Text>

            <View style={styles.inputContainer}>
                <Input placeholder="FullName" autoFocus value={fullName} onChangeText={text => setFullName(text)} />
                <Input placeholder="Email" value={email} onChangeText={text => setEmail(text)} />
                <Input placeholder="Password" secureTextEntry value={password} onChangeText={text => setPassword(text)} />
                <Input placeholder="Profile Picture" value={imageUrl} onChangeText={text => setImageUrl(text)} />
            </View>

            <Button containerStyle={styles.button} onPress={Register} title="Register" />
        </View>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    inputContainer: {
        width: 300
    },
    button: {
        width: 200,
        marginTop: 10
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
