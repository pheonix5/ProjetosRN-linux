import { ImageBackground, View, Text, Image } from "react-native";
import { styles } from "./styles";

export function Badge(){
  return (
    <View style={styles.container} >
      <ImageBackground style={styles.background}>
        <View style={styles.header}>
          <Text style={styles.company}>Nome da empresa</Text>
          <Text style={styles.id}>#1234567</Text>
        </View>

        <View style={styles.content}>
          <Image style={styles.image} source={{uri: 'https://github.com/pheonix5.png'}}/>

          <Text style={styles.name}>Lucas Felix</Text>
          <Text style={styles.email}>lucas.felix413@gmail.com</Text>
        </View>
      </ImageBackground>
    </View>
  )
}