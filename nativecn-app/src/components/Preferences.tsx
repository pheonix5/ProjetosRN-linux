import { useState } from 'react';
import { View } from 'react-native';

import { Option } from '@/components/Option';
import { Title } from '@/components/Title';
import { Switch } from '@/components/Switch';
import { Checkbox } from '@/components/Checkbox';

export function Preferences() {
  const [isEnable, setIsEnabled] = useState(false);

 return (
   <View className='w-full'>
    <Title>Preferences</Title>

    <Option>
      <Option.Icon icon='dark-mode' />
      <Option.Title>Dark Mode</Option.Title>
      <Switch onValueChange={setIsEnabled} value={isEnable}/>
    </Option>

    <Option>
      <Option.Icon icon='email' />
      <Option.Title>Public Email</Option.Title>
      <Checkbox/>
    </Option>
   </View>
  );
}