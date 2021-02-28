import React, { useEffect, useState } from 'react';
import { View, Text,  Picker,  FlatList, ScrollView } from 'react-native';
import database from '@react-native-firebase/database';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';




function Offers() {
 
  const [offers, setOffers] = useState([]);


  useEffect(() => {
    database().ref('jobs').on('value', function (snapshot) {
      const offers = [];

      snapshot.forEach(function (childSnapshot) {

        {
          {

            offers.push({
              ...childSnapshot.val()
            })
          }
          
        }
      });
      setOffers(offers);
    });
  }, [])




  return (
    <ScrollView>
      <View>
       
        <FlatList
          data={offers}

          renderItem={({ item }) => (

            <View style={{ height: 145, backgroundColor: 'lightblue', width: 350, padding: 10 }}>

              <View style={{ backgroundColor: 'white', padding: 10 }}>
                <Text style={{ fontSize: 20 }}><FontAwesome5 name={'user'} solid color='red' size={20} />&ensp;{item.title}
                </Text>
                <Text><FontAwesome5 name={'briefcase'} solid color='red' />&ensp; {item.desc}</Text>
                <Text><FontAwesome5 name={'envelope'} solid color='red' />&ensp; {item.address}</Text>
                <Text><FontAwesome5 name={'phone-square-alt'} solid color='red' />&ensp; {item.contact}</Text>
                <Text><FontAwesome5 name={'dollar-sign'} size={16} solid color='red' />&ensp; {item.salary}</Text>
              </View>

            </View>
          )}
        />

      </View>
    </ScrollView>
  )
}

export default Offers;