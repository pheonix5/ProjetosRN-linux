import { useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { Slot, router } from "expo-router";
import { ClerkProvider, useAuth } from '@clerk/clerk-expo'
import { tokenCache } from "@/storage/tokenCache";

const PUBLIC_CLERK_PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY as string

function InicitalLayout() {
  const { isSignedIn, isLoaded } = useAuth()

  useEffect(() => {
    if (!isLoaded) {
      return
    }


    if (isSignedIn) {
      router.replace("(auth)")
    } else {
      router.replace("(public)")
    }
  }, [isSignedIn])


  return isLoaded ? <Slot /> : (
    <ActivityIndicator size={28} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} />
  )
}

export default function Layout() {
  return (
    <ClerkProvider
      publishableKey={PUBLIC_CLERK_PUBLISHABLE_KEY}
      tokenCache={tokenCache}>
      <InicitalLayout />
    </ClerkProvider>

  )
}