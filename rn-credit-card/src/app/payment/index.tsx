import { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';

import { CreditCard, CARD_SIDE } from '../credit-card';

import { styles } from './styles';
import { Input } from '../components/input';


export function Payment() {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [date, setDate] = useState('')
  const [code, setCode] = useState('')

  const cardSide = useSharedValue(CARD_SIDE.front)

  function showFrontCard() {
    cardSide.value = CARD_SIDE.front
  }


  function showBackCard() {
    cardSide.value = CARD_SIDE.back
  }

  function handleFlipCard() {
    if (cardSide.value === CARD_SIDE.front) {


      showBackCard()
    } else {
      showFrontCard()
    }
  }

  return (
    <View style={styles.container}>
      <CreditCard cardSide={cardSide} data={{
        name, 
        number: number.replace(/\d{4}(?=.)/g, '$& '), 
        date, 
        code
      }} />


      <TouchableOpacity style={styles.button} onPress={handleFlipCard}>
        <Text>Inverter</Text>
      </TouchableOpacity>

      <View style={styles.form}>
        <Input
          placeholder='Nome do Titular'
          onChangeText={setName}
          onFocus={showFrontCard}
        />

        <Input
          placeholder='Número do cartão'
          keyboardType='numeric'
          maxLength={16}
          onChangeText={setNumber}
          onFocus={showBackCard}
        />

        <View style={styles.inputInline}>
          <Input
            placeholder='01/02'
            style={styles.smallInput}
            onChangeText={setDate}
            onFocus={showBackCard}
          />

          <Input
            placeholder='CVV'
            keyboardType='numeric'
            maxLength={3}
            style={styles.smallInput}
            onChangeText={setCode}
            onFocus={showBackCard}
          />
        </View>
      </View>
    </View>
  );
}