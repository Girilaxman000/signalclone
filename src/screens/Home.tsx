import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import CustomListItem from '../component/CustomListItem'
import { db, auth } from '../../firebase'


const Home = () => {
    const [chats, setChats] = useState([]);
    useEffect(() => {

        const unsubscribe = db.collection('chats').onSnapshot((snapshot) =>
            snapshot.docs.map((docs) => {
                const data: any = []
                data.push({ obj: docs.data(), id: docs.id })
                //data.push({ ...docs.data() })
                setChats(data)
            })
        )
        return unsubscribe

    }, [])

    return (
        <View>
            <ScrollView>
                {
                    chats.map(({ id, obj: { chatName } }) =>  //destructure chat 
                        <CustomListItem key={id} id={id} chatName={chatName} />
                    )
                }
            </ScrollView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})
