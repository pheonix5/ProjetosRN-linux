import { useEffect, useState } from 'react';
import { View, Text, Button, TextInput, FlatList, Pressable, Alert } from 'react-native';

import { useSQLiteContext } from 'expo-sqlite'
import { drizzle } from 'drizzle-orm/expo-sqlite';
import * as productSchema from '../database/schemas/productSchema'
import { asc, eq, like } from 'drizzle-orm';

type Data = {
  id: number,
  name: string
}

export function Home() {
  const [name, setName] = useState('')
  const [data, setData] = useState<Data[]>([])
  const [search, setSearch] = useState('')

  const database = useSQLiteContext()
  const db = drizzle(database, { schema: productSchema })

  async function fetchProducts() {
    try {
      const response = await db.query.product.findMany({
        where: like(productSchema.product.name, `%${search}%`),
        orderBy: [asc(productSchema.product.name)]
      })
      // console.log(response)
      setData(response)
    } catch (error) {
      console.log(error);

    }
  }

  async function add() {
    try {
      const response = await db.insert(productSchema.product).values({ name })

      Alert.alert("Cadastrado com o ID: " + response.lastInsertRowId)
      setName(""),
        await fetchProducts()
    } catch (error) {
      console.log(error);
    }
  }

  async function remove(id: number) {
    try {
      Alert.alert("Remover", "Deseja Remover?", [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Sim',
          onPress: async () => {
            await db
              .delete(productSchema.product)
              .where(eq(productSchema.product.id, id))

            await fetchProducts()
          }
        }
      ])
    } catch (error) {
      console.log(error)
    }
  }

  async function  show(id: number) {
    try {
      const product = await db.query.product.findFirst({
        where: eq(productSchema.product.id, id)
      })

      if(product){
        Alert.alert(`Produto ID: ${product.id}  Cadastrado com o nome ${product.name}` )
      }
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [search])

  return (
    <View style={{ flex: 1, padding: 32, gap: 16 }}>
      <TextInput
        placeholder='Nome'
        style={{
          height: 54,
          borderWidth: 1,
          borderRadius: 7,
          borderColor: '#999',
          paddingHorizontal: 16
        }}
        value={name}
        onChangeText={setName}
      />


      <Button title='Salvar' onPress={add} />

      <TextInput
        placeholder='Pesquisar'
        style={{
          height: 54,
          borderWidth: 1,
          borderRadius: 7,
          borderColor: '#999',
          paddingHorizontal: 16
        }}
        value={search}
        onChangeText={setSearch}
      />


      <FlatList
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Pressable
            style={{
              padding: 16,
              borderWidth: 1,
              borderRadius: 7
            }}
            onLongPress={() => remove(item.id)}
            onPress={() => show(item.id)}
            >
            <Text>{item.name}</Text>
          </Pressable>
        )}
        ListEmptyComponent={() => <Text>Lista Vazia.</Text>}
        contentContainerStyle={{
          gap: 16
        }}
      />
    </View>
  );
}