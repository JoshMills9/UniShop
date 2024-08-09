import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";





export default function HeaderComponent(props){

    const navigation = useNavigation()

   

    const handleBack = () => {
        if(props?.title === "Details"){
            navigation.navigate("home")
        }else if( props?.title === "Post ad"){
            navigation.navigate("home")
        }
    }

    return(
        <View style={{
            flexDirection:"row", justifyContent:"space-between",alignItems:"center",
             borderBottomWidth:1,borderColor:"lightgray",padding:18, backgroundColor:"white", borderBottomRightRadius:20, borderBottomLeftRadius:20, marginBottom:15}}>

            <View style={{flexDirection:"row", width:120,justifyContent:"space-between", alignItems:"center"}}>
                <Ionicons name={props?.iconLeft} size={28} onPress={handleBack} />
                {props?.title ?<Text style={{fontSize:20, fontWeight:"500",}}>{props?.title}</Text>
                :<Text style={{fontSize:20, fontWeight:"700", color:"royalblue"}}>Uni<Text style={{color:"orangered"}}>Shop</Text></Text>}
            </View>


            <View>
                <Ionicons name={props?.iconRight} size={28} color={props?.title === "Details" ? "green" : "black"}/>
            </View>
            
        </View>
    )
}