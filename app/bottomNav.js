import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";





export default function BottomNavComponent(){

    const [isActive, setisActive] = useState(true)


    return(
        <View style={{flexDirection:"row", justifyContent:"space-between",alignItems:"center", backgroundColor:"white",paddingVertical:5, paddingHorizontal:15}}>
            
    
                <View>
                    <Pressable>
                            <View style={{alignItems:"center",}}>
                                    <Ionicons name="heart-outline" size={24} color={"gray"}   />
                                    <Text style={{color:"gray",fontWeight:"500", fontSize:12}}>
                                        Favourite
                                    </Text>
                            </View>
                    </Pressable>
                </View>

                <View>
                    <Pressable>
                        {({pressed})=>(
                                <View style={{alignItems:"center",}}>
                                    <Ionicons name="home" size={24} color={pressed || isActive ? "royalblue" :"gray"}   />
                                    <Text style={{color: pressed || isActive ? "royalblue": "gray",fontWeight:"500", fontSize:12}}>
                                        Home
                                    </Text>
                                </View>
                        )}
                    </Pressable>
                </View>

                <View>
                    <Pressable>
                            <View style={{alignItems:"center",}}>
                                    <Ionicons name="person-outline" size={24} color={"gray"}   />
                                    <Text style={{color:"gray",fontWeight:"500", fontSize:12}}>
                                        Profile
                                    </Text>
                            </View>
                    </Pressable>
                </View>
            
            
        </View>
    )
}