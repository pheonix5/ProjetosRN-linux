import { useEffect, useState } from 'react';
import {View, Text, StyleSheet} from 'react-native'
import * as WebBrowser from 'expo-web-browser';
import * as Linking from 'expo-linking';

import { useOAuth } from '@clerk/clerk-expo';

import Button from '@/components/Button';


WebBrowser.maybeCompleteAuthSession();

export default function Signin(){
  const [isLoading, setIsloading] = useState(false)
  const googleOAuth = useOAuth({ strategy: "oauth_google" })



  async function onGoogleSign() {
    try {
      setIsloading(true)

      const redirectUrl = Linking.createURL("/")
      const oAuthFlow = await googleOAuth.startOAuthFlow({ redirectUrl });

      if(oAuthFlow.authSessionResult?.type === 'success'){
        if(oAuthFlow.setActive){
          await oAuthFlow.setActive({ session: oAuthFlow.createdSessionId })
        }
      }else{
        setIsloading(false)
      }
    } catch (error) {
      console.log(error);
      setIsloading(false)
      
    }
  }

  useEffect(() => {
    WebBrowser.warmUpAsync();


    return () => {
      WebBrowser.coolDownAsync();
    }
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entrar</Text>
      <Button
        icon='logo-google'
        title='Entrar com Google'
        onPress={onGoogleSign}
        isLoading={isLoading}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    justifyContent: 'center',
    gap: 32,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});