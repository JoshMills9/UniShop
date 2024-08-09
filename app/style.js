import { StyleSheet } from "react-native";




const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"flex-end",
        alignItems:"center",
        paddingVertical:30
    },
    container1:{
        flex:1,
        justifyContent:"space-between"
    },

    getStarted:{
        height:60,
        width:"85%",
        backgroundColor:"white",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:15,
       
    },
    
    text:{
        fontSize:18,

    },


    headerComp:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginTop:15
    },


    home:{
        flex:1,
        padding:20
    },

    overlay:{
        flex:1,
        backgroundColor:"rgba(0, 0, 0, 0.3)",
        justifyContent:"flex-end"
    },

    logoView:{
        width: "100%",
        paddingHorizontal:20,
        justifyContent:"flex-end",
        paddingBottom:200
    },

    main :{
        width:"100%",
        backgroundColor:"white",
        paddingHorizontal:15,
        paddingTop:15,
        borderTopRightRadius:50,
        borderTopLeftRadius:50,
    },
    welcomeTxt:{
        color:"white",
        fontSize:38,
        fontWeight:"500",
    
    },

    text:{
        fontSize:16, 
    },

    searchView:{
        justifyContent:"space-evenly",
        marginTop:8
    },

   

    socialView:{
       justifyContent:"space-around",
       alignItems:"center",
       width:"100%",
       height:100,
       marginTop:10,

    },

    options:{
        marginTop:10,
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"row"
    },
    Update:{
        fontSize:28,
        color:"rgba(100, 200, 255, 1)",
        fontWeight:"500",
        
    },

    updateTxt:{
        fontSize:16,
        fontWeight:"normal",
        textAlign:"justify",
        padding:3,
        marginTop:10,
        color:"rgba(240, 240, 240, 1)"
    }
})



export default styles;