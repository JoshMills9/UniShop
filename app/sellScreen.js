import React,{useState,useEffect} from "react";
import { TextInput, View, Text, Image, TouchableOpacity,Alert,ActivityIndicator, StatusBar,Platform, ScrollView} from "react-native";

import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import HeaderComponent from "./headerComponent";

import app from "../firebaseConfig"

import { getFirestore, collection, addDoc } from "firebase/firestore";


import styles from "./sellStyles"

export default function SellScreen(){

    const db = getFirestore(app);

    const [selectedImage, setSelectedImage] = useState(null);


    const postAd = async() => {
        try {
            const docRef = await addDoc(collection(db, "users"), {
              first: "Ada",
              last: "Lovelace",
              born: 1815
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }



    const [Category, setCategory] = useState("")
    const [Title, setTitle] = useState("")
    const [Brand, setBrand] = useState("")
    const [Type, setType] = useState("")
    const [Condition, setCondition] = useState("")
    const [Price, setPrice] = useState("")
    const [Description, setDescription] = useState("")
    const [Name, setName] = useState("")
    const [phoneNumber, setphoneNumber] = useState("")


    const [showSubmitting, setSubmitting] = useState(false)


    //useEffect and function to select image
    useEffect(() => {
        requestPermission();
    }, []);

    const requestPermission = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert('Permission denied', 'Permission to access the camera roll is required!');
        }
      };

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
          
        } catch (error) {
          console.error('Error picking image: ', error);
        }
      };
    





            
    



    return(
        <View style={{flex:1, justifyContent:"space-between" ,}}>

                <HeaderComponent  iconLeft={"arrow-back-outline"} title={"Post ad"} iconRight={"notifications-outline"} />
                
                
                <ScrollView contentContainerStyle={{justifyContent:"space-between",height:750, paddingBottom:40}}>
                
                <View style={{borderRadius:10,borderWidth:1,borderColor:"gray", justifyContent:"center",height:250, marginBottom:10}}>
                    
                    <Image source={(selectedImage) ? { uri: selectedImage} : require("../assets/images/img/img3.jpg")} style={{  height: 250 , width:420, alignSelf:"center", borderRadius:15 }} resizeMode="cover"/>
                   
                    <TouchableOpacity onPress={pickImage} style={{position:"absolute", right:10, backgroundColor: 'rgba(0, 0, 0, 0.5)',width:selectedImage  ? 90 :140, height:45, bottom:10, flexDirection:"row",borderRadius:10,paddingHorizontal:5, justifyContent:"space-between",alignItems:"center"}} >
                        <Text style={{color:"white", fontSize: selectedImage  ? 18:15 ,fontWeight:"800"}}>{"Upload photo"}</Text>
                        <Ionicons name="camera-outline" size={33} color={"white"}/>
                    </TouchableOpacity>
                    

                </View>

                
                <View style={{marginTop:10,marginHorizontal:10, justifyContent:"space-between", height:210,paddingBottom:10}}>
                    
                
                        <View style={styles.detailView}>
                            <TextInput   style={{height:55,fontSize:18,width:"48%", borderRadius:8, borderWidth:1,padding:15,borderColor:"gray"}}  value={Category} onChangeText={(text) => setCategory(text)} placeholder={ "Category*"}/>
                            <TextInput   style={{height:55,fontSize:18,width:"48%", borderRadius:8, borderWidth:1,padding:15,borderColor:"gray"}} value={Title} onChangeText={(text) => setTitle(text)} placeholder={"Title*"}/>
                        </View>

                        <View style={styles.detailView}>
                            <TextInput   style={{height:55,fontSize:18,width:"48%", borderRadius:8, borderWidth:1,padding:15,borderColor:"gray"}} value={Brand} onChangeText={(text) => setBrand(text)} placeholder={"Brand*"}/>
                            <TextInput   style={{height:55,fontSize:18,width:"48%", borderRadius:8, borderWidth:1,padding:15,borderColor:"gray",}} value={Type} onChangeText={(text) => setType(text)} placeholder={"Type*"}/>
                        </View>

                        <View style={styles.detailView}>
                            <TextInput   style={{height:55,fontSize:18,width:"48%", borderRadius:8, borderWidth:1,padding:15,borderColor:"gray"}} value={Condition} onChangeText={(text) => setCondition(text)} placeholder={"Condition*"}/>
                            <TextInput  style={{height:55,fontSize:18,width:"48%", borderRadius:8, borderWidth:1,padding:15,borderColor:"gray"}} value={Price} onChangeText={(text) => setPrice(text)} placeholder={"Price*"}/>
                        </View>

                </View>
                 
                <View style={{marginTop:10,marginHorizontal:10,paddingBottom:10}}>
                    <TextInput textAlignVertical="top"  style={{maxHeight:250,height:150,fontSize:18, borderRadius:5, borderWidth:1,padding:15,borderColor:"gray",}} value={Description} onChangeText={(text) => setDescription(text)} placeholder={"Description*"} multiline={true}/>
                </View>

                <View style={[styles.detailView,{marginTop:10}]}>
                            <TextInput   style={{height:55,fontSize:18,width:"46%",marginLeft:10,borderRadius:8, borderWidth:1,padding:15,borderColor:"gray"}} value={phoneNumber} onChangeText={(text) => setphoneNumber(text)} placeholder={"Phone Number*"}/>
                            <TextInput  style={{height:55,fontSize:18,width:"46%",marginRight:10, borderRadius:8, borderWidth:1,padding:15,borderColor:"gray"}} value={Name} onChangeText={(text) => setName(text)} placeholder={"Name*"}/>
                </View>




                </ScrollView>





                    <View style={{ justifyContent:"space-between",paddingHorizontal:20}}>
                        <TouchableOpacity  style={{justifyContent:"center",marginBottom:15,borderRadius:10,height:50,width:"45%",flexDirection:"row", alignSelf:"center",alignItems:"center",elevation:2, backgroundColor:'royalblue'}}>
                        {showSubmitting ? 
                            <ActivityIndicator  color="white"/> 
                            :
                            <Text style={{fontSize:20,fontWeight:"700", color:"white"}}>
                                {"Post ad"}
                            </Text>
                        }
                        </TouchableOpacity>

                    </View>
         

            
        </View>
    )
}