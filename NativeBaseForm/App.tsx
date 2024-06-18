import { SingUp } from './src/screens/SignUp';
import { NativeBaseProvider } from 'native-base'

export default function App() {
  return (
    <NativeBaseProvider>
      <SingUp />
    </NativeBaseProvider>

  )
}
