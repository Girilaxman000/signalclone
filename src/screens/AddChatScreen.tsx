import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import { db } from '../../firebase'
import { HOME_ROUTE } from '../navigation/routes'
import * as RootNavigation from '../navigation/RootNavigation'

const AddChatScreen = () => {
    const [input, setInput] = useState('')

    const createChat = async () => {
        await db.collection('chats').add({
            chatName: input
        }).then(() => {
            RootNavigation.navigate(HOME_ROUTE)
        }).catch((error) => alert(error))
    }

    return (
        <View style={styles.container}>
            <Input placeholder="Enter A New Chat"
                value={input}
                onChangeText={text => setInput(text)}
                leftIcon={
                    <Icon color="black" name="wechat" size={24} />
                }
            />
            <Button title="Create New Chat" onPress={createChat} />
        </View>
    )
}

export default AddChatScreen

const styles = StyleSheet.create({
    container: {
        padding: 30
    }
})
