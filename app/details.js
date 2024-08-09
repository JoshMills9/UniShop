import React from "react";
import { Image, Text, View, StatusBar, TouchableOpacity } from "react-native";
import styles from "./detailsStyles";
import HeaderComponent from "./headerComponent";
import { Ionicons } from "@expo/vector-icons";





export default function DetailsScreen({route}){

    const  {title, size, img} = route.params || {}


    return(
        <View style={styles.container}>
            <StatusBar barStyle={"dark-content"} backgroundColor={"white"}/>

            <HeaderComponent iconLeft={"arrow-back-outline"} title={"Details"} iconRight={"logo-whatsapp"}  />
   
            <View style={styles.main}>
                <View style={styles.imgView}>
                    <Image source={img} style={{width:350, height:230}}  resizeMode="cover"/>
                </View>

                <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center", marginTop:13}}>
                    <View>
                        <Text style={styles.titleText} adjustsFontSizeToFit={true} numberOfLines={2}>
                            {title}
                            
                        </Text>
                        <Text>⭐️ 4.9</Text>
                    </View>

                    <Text style={styles.priceText}>GH₵ 100.00</Text>
                </View>

                <View style={styles.details}>
                    <Text style={{fontSize:14, color:"gray", marginBottom:10}} adjustsFontSizeToFit={true} numberOfLines={1}>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  </Text>
                    
                    <View style={{flexDirection:"row", justifyContent:"space-between", marginBottom:10}}>
                        <View>
                            <Text style={styles.valueText}>Addidas</Text>
                            <Text style={styles.propText}>Brand</Text>
                        </View>
                        <View>
                            <Text style={styles.valueText}>Dresses</Text>
                            <Text style={styles.propText}>Type</Text>
                        </View>
                        <View>
                            <Text style={styles.valueText}>Brand New</Text>
                            <Text style={styles.propText}>Condition</Text>
                        </View>
                    </View>

                    <View style={{flexDirection:"row", justifyContent:"space-between", marginBottom:10}}>
                        <View>
                            <Text style={styles.valueText}>Nike</Text>
                            <Text style={styles.propText}>Brand</Text>
                        </View>
                        <View>
                            <Text style={styles.valueText}>Shirts</Text>
                            <Text style={styles.propText}>Type</Text>
                        </View>
                        <View>
                            <Text style={styles.valueText}>Used</Text>
                            <Text style={styles.propText}>Condition</Text>
                        </View>
                    </View>



                    <Text style={{fontSize:14, color:"gray",}} adjustsFontSizeToFit={true} numberOfLines={1}>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  </Text>
                </View>

                <View>
                    <Text style={styles.valueText}>Description</Text>
                    <Text style={{marginTop:10, lineHeight:23, textAlign:"justify"}}>
                        adjhaljdakdakdl;kad, ladkajd;alkl;da akldjal;kdadalkdja
                        akdadj;alk dl;akdlakl;dka;l asdlkajkdljad adjhlajdlad
                        dakjdlakjdkajl kljsadlkajdkajlkd ajkhdlkajdlkajd alkjdlkajdka
                        adkjlakjdlakjda akdjlkajdakl
                    </Text>
                </View>


                <View style={{marginVertical:40}}>
                    <TouchableOpacity style={{width:"80%", height:55, backgroundColor:"royalblue",elevation:2, alignSelf:"center", borderRadius:10, alignItems:"center",justifyContent:"center"}}>
                        <Text style={{fontSize:18, color:"white"}}>Show contact</Text>
                    </TouchableOpacity>
                </View>
            </View>


        
        </View>
    )
}