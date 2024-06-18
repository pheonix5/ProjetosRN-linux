import { theme } from '@/theme'
import { fontFamily } from '@/theme/fontFamily'
import {View, StyleSheet, Text} from 'react-native'

export default function Search(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Search</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.black
  },
  text:{
    fontSize: 22,
    fontWeight: 'bold',
    color: theme.colors.white,
    fontFamily: theme.fontFamily.bold
  }
})