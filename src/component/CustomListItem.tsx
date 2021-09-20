import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar } from 'react-native-elements/dist/avatar/Avatar'
import { ListItem } from 'react-native-elements'
import * as RootNavigation from "../navigation/RootNavigation";
import { CHT_ROUTE } from '../navigation/routes';


const CustomListItem = ({ chatName, id }: { chatName: string, id: string }) => {
    return (
        <ListItem key={id} onPress={() => RootNavigation.navigate(CHT_ROUTE, { name: chatName, id: id })}>
            <Avatar rounded source={{ uri: "https://i.redd.it/dh5otp8kcf741.png" }} />
            <ListItem.Content>
                <ListItem.Title>
                    {chatName}
                </ListItem.Title>
                <ListItem.Subtitle>
                    {id}
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    )
}

export default CustomListItem

const styles = StyleSheet.create({})
