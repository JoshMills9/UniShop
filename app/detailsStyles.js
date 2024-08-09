import { StyleSheet } from "react-native";




const styles = StyleSheet.create({
   container:{
    flex:1,
    
   },

   main:{
    flex:1,
    paddingHorizontal:20
   },

   imgView:{
    width:"100%",
    height:250,
    backgroundColor:"gainsboro",
    borderRadius:5,
    alignItems:"center",
    justifyContent:"center"
   },

   titleText:{
    fontSize:25,
    fontWeight:"500",
    width:150,

   },

   priceText:{
    fontSize:20,
    color:"orangered",
    fontWeight:"500"
   },
   details:{
      marginVertical:15,
   },
   propText:{
      color:"gray",
      fontSize:16,

   },
   valueText:{
      fontSize:17,
      fontWeight:"600"
   }
})



export default styles;