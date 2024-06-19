import { FlatList } from 'react-native';
import { prismaClient } from '../../services/db';
import { TaskList } from './list';

export function Taks({ filter }: { filter: boolean }) {

  const tasks = prismaClient.task.useFindMany({
    where:{
      completed: filter
    }
  });
  

  return (
    <>
      <FlatList 
        data={tasks}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <TaskList data={item}/>}
      />
    </> 
  );
}
