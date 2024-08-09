import React, { useState ,useEffect } from "react";
import { View, Image, Text, StatusBar, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, Alert, ActivityIndicator } from "react-native";
import styles from "./style";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from "@react-navigation/native";




export default function SignUpScreen() {

    const [signUpEmail, setSignUpEmail] = useState('');
    const [signUpPassword, setSignUpPassword] = useState("");
    const [Username, setUsername] = useState("");
    const [showIndicator, setShowIndicator] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null);
    const [upload, setUpload] = useState(false)
    const [ViewPass, setViewPass] = useState(true)
    const newAdmin = true
    const navigation = useNavigation()

    //add user  to  database
    const db = getFirestore();
    const auth = getAuth(); 

 const handleAddData = async () => {
   // Write data to Firebase Realtime Database
   const usersCollectionRef = collection(db, 'UserDetails'); // Reference to 'users' collection
   const newUserRef = await addDoc(usersCollectionRef, {
    userDetails:{
     ChurchName: Username,
     email: signUpEmail,
     password: signUpPassword,
     Image: selectedImage
    }
   })
   console.log("Data added successfully");
 };


 //sign up func
 const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
      handleAddData();
      setSignUpEmail('');
      setSignUpPassword('');
      Alert.alert("Sign Up Success", "Account Created Succesfully!");
      setShowIndicator(false)
      navigation.navigate("Users", {email: signUpEmail , password: signUpPassword , newAdmin : newAdmin});
    } catch (error) {
      Alert.alert(error.message);
      setShowIndicator(false)
      console.error('Error signing up:' , error);
    }
  }

   //function to pik image
   const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        
      });
        setSelectedImage(result.assets[0].uri);
        setUpload(true)
      
    } catch (error) {
      console.error('Error picking image: ', error);
    }
  };

   


    return(
        <View style={[styles.container1,{justifyContent:"flex-start"}]}>
        
    
        <View style={[styles.searchView,{height:300,}]}>
            
            <View>
                <Feather style={{position:"absolute", left:20, top:20,zIndex:2}}  name="user" size={22} color="gray" />
                <TextInput style={{ width:"100%",  height:60, borderRadius:50,paddingHorizontal:15,paddingLeft:55,fontSize:17,borderColor:"lightgray",borderWidth:1}}value={Username} onChangeText ={(text) => setUsername(text)}  keyboardType="default" inputMode="text" placeholder="Username" placeholderTextColor={"gray"}  cursorColor={"dimgray"}/>
            </View>
            
            <View>
                <MaterialIcons style={{position:"absolute", left:20, top:20,zIndex:2}} name="key" size={23} color="gray" />
                <TextInput style={{ width:"100%", height:60, borderRadius:50,paddingHorizontal:15,paddingLeft:55,fontSize:17,borderColor:"lightgray",borderWidth:1}} value={signUpEmail} onChangeText ={(text) => setSignUpEmail(text)}  keyboardType="default" inputMode="text" placeholder="Password" placeholderTextColor={"gray"} textContentType="emailAddress"  cursorColor={"dimgray"}/>
            </View>

            <View>
                <MaterialIcons style={{position:"absolute", left:20, top:20,zIndex:2}}  name="key" size={24} color="gray" />
                <TextInput style={{ width:"100%",  height:60, borderRadius:50,paddingHorizontal:15,paddingLeft:55,fontSize:17,borderColor:"lightgray",borderWidth:1}}  keyboardType="default" inputMode="text" value ={signUpPassword} onChangeText={(txt) => setSignUpPassword(txt)} placeholder="Student ID" secureTextEntry={ViewPass} textContentType="newPassword" placeholderTextColor={"gray"} cursorColor={"dimgray"}/>
                <TouchableOpacity onPress={()=> setViewPass(!ViewPass)} style={{position:"absolute", right:20, top:20,zIndex:2}} ><MaterialCommunityIcons  name="eye-off" size={24} color="dimgray"/></TouchableOpacity>
            </View>


            <TouchableOpacity style={{flexDirection:"row",elevation:2, justifyContent:"space-evenly", width:"35%",alignItems:"center",borderRadius:10, backgroundColor:upload ?"white" : "royalblue", height:40}} onPress={pickImage} >
                <>
                    <Text style={{fontWeight:"500",color:upload ? "royalblue" : "white"}}>{upload ? "Uploaded" :"Scan ID"}</Text>
                    <Feather name="credit-card" size={20} color={upload? "royalblue" :  "white"}/>
                </>
            </TouchableOpacity>
           
        </View>

        <View style={{marginBottom:30}}>
            <TouchableOpacity onPress={() => {handleSignUp(); setShowIndicator(true)}} style={{width:"100%", height:55, marginTop:5, alignItems:"center", justifyContent:"center",backgroundColor:"royalblue", borderRadius:50,elevation:3}}>
            { showIndicator ? <ActivityIndicator size={"small"} color={"white"}/> :
                <Text style={[styles.text,{fontWeight:"500", fontSize:18,color:"white"}]}>Register</Text>
            }
            </TouchableOpacity>
            
        </View>


        </View>
    

    )
}