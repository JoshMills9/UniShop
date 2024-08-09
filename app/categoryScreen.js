import React from "react";
import {View,Text, TouchableOpacity} from "react-native"

import styles from "./categoryStyles";
import { Ionicons } from "@expo/vector-icons";

export default function CategoryScreen(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Ionicons name="arrow-back" size={28}  />
                <Text style={styles.headerText}>Select Your Department</Text>
            </View>

            <View style={{flex:1}}>

                <View style={styles.main}>
                    <TouchableOpacity style={styles.cateView}>
                        <Ionicons name="laptop-outline" size={30} />
                        <Text style={styles.cateText}>Engineering</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.cateView}>
                        <Ionicons name="laptop-outline" size={30} />
                        <Text style={styles.cateText}>Hardware</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.main}>
                    <TouchableOpacity style={styles.cateView}>
                        <Ionicons name="laptop-outline" size={30} />
                        <Text style={styles.cateText}>Fashion</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.cateView}>
                        <Ionicons name="laptop-outline" size={30} />
                        <Text style={styles.cateText}>Robotics</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.main}>
                    <TouchableOpacity style={styles.cateView}>
                        <Ionicons name="laptop-outline" size={30} />
                        <Text style={styles.cateText}>Electronics</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.cateView}>
                        <Ionicons name="laptop-outline" size={30} />
                        <Text style={styles.cateText}>Engineering</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.main}>
                    <TouchableOpacity style={styles.cateView}>
                        <Ionicons name="laptop-outline" size={30} />
                        <Text style={styles.cateText}>Engineering</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.cateView}>
                        <Ionicons name="laptop-outline" size={30} />
                        <Text style={styles.cateText}>Engineering</Text>
                    </TouchableOpacity>
                </View>

                
            </View>

            <View>
                <TouchableOpacity style={styles.continue}>
                    <Text style={styles.continueText}>
                        Continue
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}