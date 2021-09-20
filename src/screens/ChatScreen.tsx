import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, Keyboard, KeyboardAvoidingView } from 'react-native'
import { Icon } from 'react-native-elements/dist/icons/Icon'
import { ScrollView, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { auth, db } from '../../firebase'
import * as firebase from 'firebase/app'
import '@firebase/firestore';


const ChatScreen = ({ route }: { route: any }) => {
    const { name, id } = route.params
    const [input, setInput] = useState('')

    const sendMessage = () => {
        Keyboard.dismiss();
        db.collection('chats').doc(id).collection('messages').add({
            // createdAt : firebase.firestore().FieldValue.serverTimestamp(),
            message: input,
            displayName: auth.currentUser?.displayName,
            email: auth.currentUser?.email,
            photoURL: auth.currentUser?.photoURL
        })

        setInput('')
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <StatusBar style="light" />
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView></ScrollView>
                <View style={styles.footer}>
                    <TextInput
                        value={input}
                        onChangeText={text => setInput(text)}
                        placeholder="Signal Message"
                        onSubmitEditing={sendMessage}
                        style={styles.textInput}
                    />
                    <TouchableOpacity onPress={sendMessage}>
                        <Icon name="send" size={24} color="blue" />
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}

export default ChatScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    footer: {
        marginTop: 500,
        flexDirection: 'row',
        alignItems: 'center',
        width: "100%",
        padding: 15
    },
    textInput: {
        bottom: 0,
        height: 40,
        flex: 1,
        marginRight: 15,
        borderColor: "transparent",
        backgroundColor: "#ECECEC",
        padding: 10,
        color: "grey",
        borderRadius: 30
    }
})
