import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, Picker } from 'react-native';
import database from '@react-native-firebase/database';


function Notification() {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");



    const save_data = () => {
        let msg = {
            title,
            desc
        }

        database().ref('/').child('notifications').push(msg);

        setTitle("");
        setDesc("")
    }




    return (
        <View style={{ flex: 1, alignItems: 'center' }}>



            <View style={{ marginTop: 30 }}>


                <View style={{ display: 'flex', flexDirection: 'row' }}>
                
                    <TextInput
                        style={{ height: 50, borderColor: 'gray', borderWidth: 1, width: 250, marginLeft: 5 }}
                        placeholder="Title"
                        value={title} onChangeText={(text) => setTitle(text)}
                    />
                </View>


                <View style={{ display: 'flex', flexDirection: 'row' }}>
                   
                    <TextInput
                        style={{ height: 200, borderColor: 'gray', borderWidth: 1, width: 250, marginLeft: 5, marginTop:10, }}
                        placeholder="Description"
                        value={desc} onChangeText={(text) => setDesc(text)}
                    />
                </View>


                <TouchableOpacity onPress={save_data}

style={{
    backgroundColor: 'red',
    alignItems: 'center',
    borderRadius: 15,
    padding: 15,
    width: 150,
    marginTop: 30,
    marginLeft: 57
}}>

<Text style={{ color: 'white', fontSize: 15, fontWeight: '800' }}>
    Save
</Text>

</TouchableOpacity>

</View>
        </View>
    )
}


export default Notification;