import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';

function Menu(props) {
    const sign_out = () =>
    {
        auth()
      .signOut()
      .then(() => console.log('User signed out!'));
      props.navigation.navigate("Home")
    }
    

    return (
        <SafeAreaProvider>
            <ScrollView>
            <TouchableOpacity onPress={sign_out}

style={{
    backgroundColor: 'red',
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 15,
    padding: 15,
    width: 150,
    marginLeft: 190,
    marginBottom: 10
}}>

<Text style={{ color: 'white', fontSize: 15, fontWeight: '800' }}>
    Sign Out
</Text>

</TouchableOpacity>
                <View>
                    <View style={{ alignItems: 'center' }}>

                        <Image
                            source={require('../assets/logo.jpg')}
                            style={{ width: 200, height: 200, resizeMode: 'contain' }}

                        />
                    </View>

                    <View style={{ height: 140, marginTop: 0, backgroundColor: 'cyan' }}>
                        <Text style={{ fontSize: 20, padding: 15 }}>
                            Want fresh talent to serve your company? Post job offerings now!
</Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate("Post Jobs")}

                            style={{
                                backgroundColor: 'red',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 15,
                                padding: 15,
                                width: 150,
                                marginLeft: 100
                            }}>

                            <Text style={{ color: 'white', fontSize: 15, fontWeight: '800' }}>
                                Post
</Text>

                        </TouchableOpacity>
                    </View>

                    <View style={{ height: 140, marginTop: 17, backgroundColor: 'yellow' }}>
                        <Text style={{ fontSize: 20, padding: 15 }}>
                            Pick the brilliant minds ready to demonstrate their skills!
</Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate("Applications For Recruitment")}

                            style={{
                                backgroundColor: 'red',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 15,
                                padding: 15,
                                width: 150,
                                marginLeft: 100
                            }}>

                            <Text style={{ color: 'white', fontSize: 15, fontWeight: '800' }}>
                                View
</Text>

                        </TouchableOpacity>

                    </View>

                    <View style={{ height: 140, marginTop: 17, backgroundColor: 'yellowgreen' }}>
                        <Text style={{ fontSize: 20, padding: 15 }}>
                            View the latest notification from admin!
</Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate("Latest Notifications")}

                            style={{
                                backgroundColor: 'red',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 15,
                                padding: 15,
                                width: 150,
                                marginLeft: 100
                            }}>

                            <Text style={{ color: 'white', fontSize: 15, fontWeight: '800' }}>
                                View
</Text>

                        </TouchableOpacity>


                    </View>


                </View>
            </ScrollView>
        </SafeAreaProvider>
    )
}



export default Menu;