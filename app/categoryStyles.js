import { StyleSheet } from "react-native";




const styles = StyleSheet.create({
   container:{
    flex:1,
    justifyContent:"space-between"
   },

   header:{
    height:70,
    backgroundColor:"white",
    justifyContent:"space-evenly",
    alignItems:"center",
    flexDirection:"row",

   },

   headerText:{
    fontSize:20,
    fontWeight:"500",
   },

   main:{
    paddingVertical:15,
    paddingHorizontal:20,
    width:"100%",
    flexDirection:"row",
    justifyContent:"space-between"
   },
    
   cateView:{
    height:120,
    width: "45%",
    backgroundColor:"white",
    alignItems:"center",
    justifyContent:"space-evenly", 
    borderRadius:15,
    elevation:5
   },

   cateText:{
    fontSize:18
   },

   continue:{
    backgroundColor:"royalblue",
    height:50,
    width:"80%",
    alignSelf:"center",
    marginBottom:25,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:15,
    elevation:4
   },

   continueText:{
    fontSize:18,
    color:"white"
   }
})



export default styles;