import { FlatList, View } from 'react-native';
import { styles } from './styles';

import Filter from '@/components/Filter';

import { FilterProps } from './filters';

export function Filters({ filter, filters,onChange }: FilterProps) {
 return (
    <FlatList
      data={filters}
      keyExtractor={item => item}
      renderItem={({ item }) => <Filter filter={item} selected={item === filter} onPress={() => onChange(item)}/>}
      horizontal
      style={styles.list}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.content}
    />
  );
}