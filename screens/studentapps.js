import React, { useEffect, useState } from 'react';
import { View, Text,  Picker,  FlatList, ScrollView, Button, TouchableOpacity } from 'react-native';
import database from '@react-native-firebase/database';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import firestore from '@react-native-firebase/firestore';
import { Container, Header, Content, Card, CardItem, Body } from "native-base";


function Applications() {
 
  const [application, setApplication] = useState([]);

  useEffect(() => {

    firestore().collection ('students')
    .get()
    .then( snapshot => {
      const students = []
      snapshot.forEach( doc => {
        const data = doc.data()
        data.id= doc.id
        students.push(data)
      })
    setApplication(students)
    })
    .catch( error => console.log(error))
  }, [])

 function del(id){
  
   firestore()
    .collection('students')
    .doc(id)
    .delete()
    .then(() => {
      console.log('User deleted!');
    });

  }



  const shortlist = () =>
  {
  
    firestore()
    .collection('students')
    // Filter results
    .where('CGPA', '>=', 3)
    .orderBy('CGPA', 'desc')
    .get()
    .then(snapshot => {
        const students = []
        snapshot.forEach( doc => {
          const data = doc.data()
          data.id= doc.id
          students.push(data)
        })
      setApplication(students)

      })
      .catch( error => console.log(error))
      console.log("apps==>", application)
  }


  return (
    <ScrollView>
      <View>
      <Content padder>
          <Card>
            <CardItem header bordered>
              <Text>Shortlist Brilliant Minds</Text>
            </CardItem>

            <CardItem bordered>
              <Body>
                <Text>
                  Have a vacancy? Want to hire fresh talent to derive your business
                  and make it a success? We have got you covered! Below are the applications 
                  from the assets of this nation! To shortlist students with above 3 CGPA
                  click the button below!
                </Text>
                <TouchableOpacity onPress={shortlist}

style={{
    backgroundColor: 'cyan',
    alignItems: 'center',
    borderRadius: 15,
    padding: 15,
    width: 150,
    marginTop: 30,
    marginLeft: 70
}}>
    <Text>Click here</Text>
    </TouchableOpacity>
              </Body>
</CardItem>

          </Card>
        </Content>

        <FlatList
          data={application}

          renderItem={({ item }) => (

            <View style={{ height: "auto", backgroundColor: 'lightblue', width: 350, padding: 10 }}>

              <View style={{ backgroundColor: 'white', padding: 10, height: "auto" }}>

                <Text style={{ fontSize: 20 }}><FontAwesome5 name={'user'} solid color='red' size={20} />&ensp;{item.StudentName}
               
                </Text>

                <Text><FontAwesome5 name={'map-marker-alt'} solid color='red' />&ensp; {item.City}</Text>
                <Text><FontAwesome5 name={'envelope'} solid color='red' />&ensp; {item.Address}
               
                </Text>
                <Text><FontAwesome5 name={'phone-square-alt'} solid color='red' />&ensp; {item.Contact}
               
                </Text>
                <Text><FontAwesome5 name={'graduation-cap'} size={16} solid color='red' />&ensp; {item.CGPA}
          
                </Text>

                <Text><FontAwesome5 name={'file-pdf'} size={19} solid color='red' />&ensp; {item.File}
                
                </Text>
              </View>

            </View>
          )}
        />



      </View>
    </ScrollView>
  )
}

export default Applications;