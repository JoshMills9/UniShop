import React from "react";
import { FlatList, Image, SafeAreaView, ScrollView, SectionList, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native"
import styles from "./homeStyles"


import HeaderComponent from "./headerComponent";
import BottomNavComponent from "./bottomNav";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";


export default function HomeScreen({navigation}){

    const data = [
        {
            title: "Electronics",
            size: 43,
            img: require("../assets/images/img/img.jpg") // Correct way to reference local image in React Native
        },
        {
            title: "Mobile Phone",
            size: 43,
            img: require("../assets/images/img/img1.jpg")
        },
        {
            title: "Fashion",
            size: 43,
            img: require("../assets/images/img/img2.jpg")
        },
        {
            title: "Shoe",
            size: 43,
            img: require("../assets/images/img/img3.jpg")
        },
        {
            title: "Dress",
            size: 43,
            img: require("../assets/images/img/img5.jpg")
        }
    ];
    


    return(
        <SafeAreaView style={styles.home}>
            <StatusBar barStyle={"dark-content"} backgroundColor={"white"}/>

            <HeaderComponent iconLeft={"list-sharp"} title={null} iconRight={"notifications-outline"} />

            <View style={styles.body}>
                <TextInput placeholder="search for products" style={{alignSelf:"center", width:"100%",backgroundColor:"white", height:45, borderRadius:10, padding:15, marginBottom:10}}/>


                <View style={{ width:"100%", height:100}}>
                    <FlatList 
                        data={data}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item, index)=> index.toString()}
                        renderItem={({item, index})=> {
                            return(
                                <View style={styles.horizontalList}>
                                  <View style={{width:70,height:70,borderRadius:100, backgroundColor:"lightgray", alignItems:"center",justifyContent:"center"}}>
                                    <Image source={item.img} style={{width:65, height:65, borderRadius:100}} resizeMode="contain" />
                                  </View>

                                  <Text style={{fontWeight:"500"}}>{item.title}</Text>
                                </View>
                            )
                        }}
                    />

                </View>


                <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <View style={{flexDirection:"row",justifyContent:"space-between", alignItems:"center"}}>
                        <Text style={{marginVertical:15, fontSize:16, fontWeight:"500"}}>Popular products</Text>
                        <MaterialIcons name="arrow-right-alt" size={26} color={"orangered"} />
                    </View>

                    <FlatList 
                            data={data}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item, index)=> index.toString()}
                            renderItem={({item, index})=> {
                                return(
                                    <View style={styles.mainList}>
                                        <TouchableOpacity onPress={()=> navigation.navigate("details", {title: item.title, img: item.img , size: item.size})} style={styles.productView}>
                                            <Image source={item.img} style={{width:"100%", height:120, borderRadius:8, alignSelf:"center"}}/>
                                            <Ionicons name="heart-outline"  size={22} color={"orangered"} style={{position:"absolute", right:15, top:15}}/>

                                            <View style={{justifyContent:"space-evenly",flex:1, padding:5}}>
                                                <Text style={{fontWeight:"600"}}>{item.title}</Text>
                                                <Text style={{color:"orangered"}}>GH₵ 190.00</Text>
                                                <Text>⭐️ 4.9</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                )
                            }}
                        />
                </View>


                <View>
                    <View style={{flexDirection:"row",justifyContent:"space-between", alignItems:"center"}}>
                        <Text style={{marginVertical:15, fontSize:16, fontWeight:"500"}}>New Arrivals</Text>
                        <MaterialIcons name="arrow-right-alt"  size={26} color={"orangered"} />
                    </View>
                    
                    <FlatList 
                            data={data}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item, index)=> index.toString()}
                            renderItem={({item, index})=> {
                                return(
                                    <View style={styles.mainList}>
                                        <TouchableOpacity  onPress={()=> navigation.navigate("details", {title: item.title, img: item.img , size: item.size})} style={styles.productView}>
                            
                                            <Image source={item.img} style={{width:"100%", height:120, borderRadius:8, alignSelf:"center"}}/>
                                            <Ionicons name="heart-outline"  size={22} color={"orangered"} style={{position:"absolute", right:15, top:15}}/>

                                            <View style={{justifyContent:"space-evenly",flex:1, padding:5}}>
                                                <Text style={{fontWeight:"600"}}>Addidas, Luis Voiton</Text>
                                                <Text style={{color:"orangered"}}>GH₵ 190.00</Text>
                                                <Text>⭐️  4.9</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                )
                            }}
                        />
                </View>

                </ScrollView>

                    
                <TouchableOpacity onPress={()=> navigation.navigate("sellScreen")} style={styles.cartIcon}>
                        <Ionicons name="add" size={23} color={"white"} />
                        <Text style={styles.text}>Sell</Text>
                </TouchableOpacity>
    

            </View>

            <BottomNavComponent />
            
        </SafeAreaView>
    )
}