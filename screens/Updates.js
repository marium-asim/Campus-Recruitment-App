import React, { useEffect, useState } from 'react';
import { View, Text,  Picker,  FlatList, ScrollView } from 'react-native';
import database from '@react-native-firebase/database';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';




function Request() {
  const [notifications, setNotifications] = useState([]);


  useEffect(() => {
    database().ref('notifications').on('value', function (snapshot) {
      const notifications = [];
      const keys = [];

      snapshot.forEach(function (childSnapshot) {

        {
          {

           notifications.push({
              ...childSnapshot.val()
            })
          }
          
     
        }
      });
      setNotifications(notifications);
      
    });
  }, [])


  return (
    <ScrollView>
      <View>
     
        <FlatList
          data={notifications}

          renderItem={({ item }) => (

            <View style={{ height: "auto", backgroundColor: 'lightblue', width: 350, padding: 10 }}>

              <View style={{ backgroundColor: 'white', padding: 10 }}>
                <Text><FontAwesome5 name={'check-circle'} solid color='red' />&nbsp; {item.title}</Text>
                <Text>&emsp; {item.desc}</Text>
              </View>

            </View>
          )}
        />

      </View>
    </ScrollView>
  )
}

export default Request;