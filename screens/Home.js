import React, { useState ,useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Button } from 'react-native';
import { GoogleSignin } from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';


function Home(props) {
    
    useEffect(() => {
        // initialize the Google SDK
        GoogleSignin.configure({
          webClientId: '93169870639-1irvlp043fp8m21v1pjirlhjo7rt3scj.apps.googleusercontent.com',
        });
      }, []);
    
      async function onGoogleButtonPress() {
        // Get the users ID token
        try{
        const { idToken } = await GoogleSignin.signIn();
    
        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    
        // Sign-in the user with the credential
        return auth().signInWithCredential(googleCredential)
      
        }
        catch(e)
    {

console.log(e)
    }
    
      }

      const [initializing, setInitializing] = useState(true);
      const [user, setUser] = useState();
    
      // Handle user state changes
      function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
        props.navigation.navigate("Admin Dasboard")
      }
    
     
  return (
    <View style={{ flex: 1, marginTop: 120, alignItems: 'center' }}>
         <Image
        source={require('../assets/logo.jpg')}
        style={{ width: 200, height: 200, resizeMode: 'contain' }}

      />
      <Text style={{ fontSize: 30 }}>
        Welcome to AceIt!
    </Text>
      <Text style={{ fontSize: 17 }}>
        Please sign in to continue
    </Text>

    <TouchableOpacity
       
        onPress={() => onGoogleButtonPress().then(()=>
            {
                console.log("Signed In")
                props.navigation.navigate("Admin Dashboard")
            })}
     
          style={{
            backgroundColor: 'lightblue',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 15,
            padding: 15,
            width: 200,
            marginTop: 10
        }}
     >

<Text>LOGIN AS ADMIN</Text>
</TouchableOpacity>

<TouchableOpacity
       
       onPress={() => onGoogleButtonPress().then(() => {
        console.log("Signed In With Google")
        props.navigation.navigate("Recruiter Dashboard") })
      }
    
         style={{
           backgroundColor: 'lightblue',
           alignItems: 'center',
           justifyContent: 'center',
           borderRadius: 15,
           padding: 15,
           width: 200,
           marginTop: 10
       }}
    >

<Text>LOGIN AS RECRUITER</Text>
</TouchableOpacity>

<TouchableOpacity
       
       onPress={() => onGoogleButtonPress().then(() => {
        console.log("Signed In With Google")
        props.navigation.navigate("Student Dashboard")
       
})
    
      }
    
         style={{
           backgroundColor: 'lightblue',
           alignItems: 'center',
           justifyContent: 'center',
           borderRadius: 15,
           padding: 15,
           width: 200,
           marginTop: 10
       }}
    >

<Text>LOGIN AS STUDENT</Text>
</TouchableOpacity>


    </View>
  )
}

export default Home;