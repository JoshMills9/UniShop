import { StyleSheet } from "react-native";




const styles = StyleSheet.create({
    home:{
        flex:1,
        justifyContent:"space-between"
    },

    body:{
        paddingHorizontal:15,
        marginBottom:10,
        flex:1
    },

    text:{
        color:"white",
        fontSize:16
    },

    cartIcon:{
        backgroundColor: "royalblue",
        borderRadius:15,
        width:90, 
        height:55,
        alignItems:"center",
        zIndex:99,
        position:"absolute",
        bottom:5,
        right:15,
        flexDirection:"row",
        justifyContent:"space-evenly",
        elevation:3
    },

    linktext:{
        fontSize:16,
        color:"midnightblue"
    },

    getItNowButton:{
        backgroundColor:"white",
        width:"40%",
        height:45,
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center"
    },

    horizontalList:{
      padding:8,
      justifyContent:"center",
      alignItems:"center"
    },

    mainList:{
        padding:5,
    },

    productView:{
        width:183,
        height:220,
        borderRadius:10,
        backgroundColor:"white",
        elevation:3,
        padding:8
    }
})



export default styles;