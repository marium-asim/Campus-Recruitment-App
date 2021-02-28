import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, Picker } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import database from '@react-native-firebase/database';


function Jobs() {
    const [title, setTitle] = useState("");
    const [contact, setContact] = useState("");
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");
    const [salary, setSalary] = useState("");
    const [desc, setDesc] = useState("");



    const save_data = () => {
        let job = {
            title,
            contact,
            city,
            address,
            salary,
            desc
        }

        database().ref('/').child('jobs').push(job);

        setTitle("");
        setContact("");
        setCity("");
        setAddress("");
        setSalary("");
        setDesc("")
    }




    return (
        <View style={{ flex: 1, alignItems: 'center' }}>



            <View style={{ marginTop: 30 }}>


                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <FontAwesome5 name={'user'} solid color='red' size={30} />
                    <TextInput
                        style={{ height: 50, borderColor: 'gray', borderWidth: 1, width: 250, marginLeft: 5 }}
                        placeholder="Job Title"
                        value={title} onChangeText={(text) => setTitle(text)}
                    />
                </View>


                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <FontAwesome5 name={'briefcase'} solid color='red' size={26.5} />
                    <TextInput
                        style={{ height: 100, borderColor: 'gray', borderWidth: 1, width: 250, marginLeft: 5 }}
                        placeholder="Job Description"
                        value={desc} onChangeText={(text) => setDesc(text)}
                    />
                </View>



                <View style={{ display: 'flex', flexDirection: 'row' }}>
                <FontAwesome5 name={'phone-square-alt'} solid color='red' size={30} />
                    <TextInput
                        style={{ height: 50, borderColor: 'gray', borderWidth: 1, width: 250, marginLeft: 5 }}
                        placeholder="Cell Number"
                        value={contact} onChangeText={(text) => setContact(text)}
                    />
                </View>



                <View style={{ display: 'flex', flexDirection: 'row' }}>
                <FontAwesome5 name={'map-marker-alt'} solid color='red' size={30} />
                    <TextInput
                        style={{ height: 50, borderColor: 'gray', borderWidth: 1, width: 250, marginLeft: 9 }}
                        placeholder="Enter City"
                        value={city} onChangeText={(text) => setCity(text)}
                    />
                </View>



                <View style={{ display: 'flex', flexDirection: 'row' }}>
                <FontAwesome5 name={'envelope'} solid color='red' size={30.5} />
                    <TextInput
                        style={{ height: 50, borderColor: 'gray', borderWidth: 1, width: 250, marginLeft: 1 }}
                        placeholder="Enter Email Address"
                        value={address} onChangeText={(text) => setAddress(text)}
                    />
                </View>



                <View style={{ display: 'flex', flexDirection: 'row' }}>
                <FontAwesome5 name={'dollar-sign'} solid color='red' size={35} />
                    <TextInput
                        style={{ height: 50, borderColor: 'gray', borderWidth: 1, width: 250, marginLeft: 12 }}
                        placeholder="Enter Salary"
                        value={salary} onChangeText={(text) => setSalary(text)}
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
                        marginLeft:70
                    }}>

                    <Text style={{ color: 'white', fontSize: 15, fontWeight: '800' }}>
                        Save
    </Text>               

                </TouchableOpacity>


            </View>
        </View>
    )
}


export default Jobs;