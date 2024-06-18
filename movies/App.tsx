import { Movie } from '@/app/Movie';
import { StatusBar, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Movie />
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    // backgroundColor: '#000',
  },
};  