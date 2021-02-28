import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, Picker } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { utils } from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';


function Profile() {

    var key= Math.random() * 2435465768789;
    var uid= key.toFixed().toString();
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [cgpa, setCGPA] = useState("");
  const [singleFile, setSingleFile] = useState('');
 

 

  const selectOneFile = async () => {
    //Opening Document Picker for selection of one file
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
        //There can me more options as well
        // DocumentPicker.types.allFiles
        // DocumentPicker.types.images
        // DocumentPicker.types.plainText
        // DocumentPicker.types.audio
        // DocumentPicker.types.pdf
      });
      //Printing the log realted to the file
      console.log('res : ' + JSON.stringify(res));
      console.log('URI : ' + res.uri);
      console.log('Type : ' + res.type);
      console.log('File Name : ' + res.name);
      console.log('File Size : ' + res.size);
      //Setting the state to show single file attributes
      setSingleFile(res);
    } catch (err) {
      //Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        //If user canceled the document selection
        alert('Canceled from single doc picker');
      } else {
        //For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

 
  const reference = storage().ref(singleFile.name);

  const save_data = () => {

    async () => {
     
          // uploads file
          await reference.putFile(singleFile.uri);
      }

      const url = storage()
  .ref(singleFile.name)
  .getDownloadURL();
 


    firestore().collection('students')
       .add({
       StudentName: name,
       Contact: contact,
       City: city,
       Address: address,
       CGPA: parseFloat(cgpa),
       File: singleFile.uri
       
       })

    

    setName("");
    setContact("");
    setCity("");
    setAddress("");
    setCGPA("");
  }






  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
     


      <View style={{ marginTop: 30 }}>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
        <FontAwesome5 name={'user'} solid color='red' size={30} />
          <TextInput
            style={{ height: 50, borderColor: 'gray', borderWidth: 1, width: 250, marginLeft: 5 }}
            placeholder="Name"
            value={name} onChangeText={(text) => setName(text)}
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
        <FontAwesome5 name={'envelope'} solid color='red' size={27} />
        <TextInput
            style={{ height: 50, borderColor: 'gray', borderWidth: 1, width: 250, marginLeft: 4.7 }}
            placeholder="Enter Email Address"
            value={address} onChangeText={(text) => setAddress(text)}
          />
        </View>



        <View style={{ display: 'flex', flexDirection: 'row' }}>
        <FontAwesome5 name={'graduation-cap'} solid color='red' size={25} />
  <TextInput
            style={{ height: 50, borderColor: 'gray', borderWidth: 1, width: 250, marginLeft: 0.2 }}
            placeholder="Enter CGPA"
            value={cgpa} onChangeText={(text) => setCGPA(text)}
          />
        </View>
        <View>
        {/*To show single file attribute*/}
        <TouchableOpacity
          activeOpacity={0.5}
          
          onPress={selectOneFile}>
          {/*Single file selection button*/}
          <Text style={{marginLeft: 50, fontSize: 19, textDecorationLine: 'underline'}}>
            Click here to pick your CV
          </Text>
        
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={save_data}

        style={{
          backgroundColor: 'red',
          alignItems: 'center',
          borderRadius: 15,
          padding: 15,
          width: 150,
          marginTop: 30,
          marginLeft: 70
        }}>

        <Text style={{ color: 'white', fontSize: 15, fontWeight: '800' }}>
          Save
    </Text>

      </TouchableOpacity>


    </View>
    </View>
  )
}


export default Profile;