import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

const { Navigator, Screen } = createMaterialTopTabNavigator()

import { styles } from './styles';
import { Cover } from '@/components/Cover';
import { Sections } from '@/app/Sections';
import { Details } from '@/app/Details';


export function Movie() {
  return (
    <View style={styles.container}>
      <Cover />

      <NavigationContainer>
        <Navigator screenOptions={{
          tabBarActiveTintColor: '#FE7300',
          tabBarInactiveTintColor: '#0496F5',
          tabBarLabelStyle:{
            fontSize: 18,
            fontWeight: '500',
            paddingVertical: 6,
            textTransform: 'capitalize'
          },
          tabBarIndicatorContainerStyle:{
            backgroundColor: '#191919'
          },
          tabBarIndicatorStyle:{
            backgroundColor: '#FE7300',
            height: 3
          }
        }}>
          <Screen name='Sessões' component={Sections}/>
          <Screen name='Detalhes' component={Details}/>
        </Navigator>
      </NavigationContainer>
    </View>
  );
}