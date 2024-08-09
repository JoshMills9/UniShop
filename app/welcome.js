import { ImageBackground, Text, TouchableOpacity, useWindowDimensions, View } from "react-native";
import styles from "./style"




export default function WelcomeScreen({navigation}) {

  const WindowWidth = useWindowDimensions().width;
  const WindowHeight = useWindowDimensions().height;



  return (
    
    <ImageBackground source={require("../assets/images/img/img.jpg")} style={styles.container}>

        <TouchableOpacity onPress={()=> navigation.navigate("home")} style={styles.getStarted}>
          <Text style={styles.text}>Get Started</Text>
        </TouchableOpacity>
   
    </ImageBackground>
  );
}
